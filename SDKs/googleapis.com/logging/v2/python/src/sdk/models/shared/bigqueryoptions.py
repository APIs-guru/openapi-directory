from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BigQueryOptionsInput:
    r"""BigQueryOptionsInput
    Options that change functionality of a sink exporting data to BigQuery.
    """
    
    use_partitioned_tables: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usePartitionedTables') }})
    

@dataclass_json
@dataclass
class BigQueryOptions:
    r"""BigQueryOptions
    Options that change functionality of a sink exporting data to BigQuery.
    """
    
    use_partitioned_tables: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usePartitionedTables') }})
    uses_timestamp_column_partitioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usesTimestampColumnPartitioning') }})
    
