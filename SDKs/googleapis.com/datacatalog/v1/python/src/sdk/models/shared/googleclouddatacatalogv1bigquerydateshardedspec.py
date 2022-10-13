from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1BigQueryDateShardedSpec:
    dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataset' }})
    latest_shard_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestShardResource' }})
    shard_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardCount' }})
    table_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tablePrefix' }})
    
