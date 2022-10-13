from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BigQueryOptions:
    use_partitioned_tables: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usePartitionedTables' }})
    uses_timestamp_column_partitioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usesTimestampColumnPartitioning' }})
    
