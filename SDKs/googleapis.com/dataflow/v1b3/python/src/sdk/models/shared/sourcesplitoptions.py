from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceSplitOptions:
    r"""SourceSplitOptions
    Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.
    """
    
    desired_bundle_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredBundleSizeBytes') }})
    desired_shard_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredShardSizeBytes') }})
    
