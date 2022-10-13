from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceSplitOptions:
    desired_bundle_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredBundleSizeBytes' }})
    desired_shard_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredShardSizeBytes' }})
    
