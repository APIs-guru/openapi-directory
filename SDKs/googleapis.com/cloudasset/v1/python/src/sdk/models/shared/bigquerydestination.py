from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import partitionspec


@dataclass_json
@dataclass
class BigQueryDestination:
    dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataset' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    partition_spec: Optional[partitionspec.PartitionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionSpec' }})
    separate_tables_per_asset_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'separateTablesPerAssetType' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    
