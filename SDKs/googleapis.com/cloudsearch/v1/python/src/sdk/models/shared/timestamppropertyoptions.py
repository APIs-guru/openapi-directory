from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timestampoperatoroptions


@dataclass_json
@dataclass
class TimestampPropertyOptions:
    operator_options: Optional[timestampoperatoroptions.TimestampOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorOptions' }})
    
