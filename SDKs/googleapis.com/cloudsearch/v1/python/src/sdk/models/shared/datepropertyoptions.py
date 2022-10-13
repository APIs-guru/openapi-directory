from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dateoperatoroptions


@dataclass_json
@dataclass
class DatePropertyOptions:
    operator_options: Optional[dateoperatoroptions.DateOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorOptions' }})
    
