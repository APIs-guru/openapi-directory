from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DateOperatorOptions:
    greater_than_operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greaterThanOperatorName' }})
    less_than_operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lessThanOperatorName' }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorName' }})
    
