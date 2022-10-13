from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import doubleoperatoroptions


@dataclass_json
@dataclass
class DoublePropertyOptions:
    operator_options: Optional[doubleoperatoroptions.DoubleOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorOptions' }})
    
