from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import booleanoperatoroptions


@dataclass_json
@dataclass
class BooleanPropertyOptions:
    operator_options: Optional[booleanoperatoroptions.BooleanOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorOptions' }})
    
