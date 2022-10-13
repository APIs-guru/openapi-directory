from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudMlV1RequestLoggingConfig:
    bigquery_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryTableName' }})
    sampling_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplingPercentage' }})
    
