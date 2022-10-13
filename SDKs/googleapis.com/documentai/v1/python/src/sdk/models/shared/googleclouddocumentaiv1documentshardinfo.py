from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentShardInfo:
    shard_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardCount' }})
    shard_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardIndex' }})
    text_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textOffset' }})
    
