from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentShardInfo:
    r"""GoogleCloudDocumentaiV1beta2DocumentShardInfo
    For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
    """
    
    shard_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardCount') }})
    shard_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardIndex') }})
    text_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textOffset') }})
    
