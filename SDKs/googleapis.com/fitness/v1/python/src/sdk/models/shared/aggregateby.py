from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AggregateBy:
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceId' }})
    data_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataTypeName' }})
    
