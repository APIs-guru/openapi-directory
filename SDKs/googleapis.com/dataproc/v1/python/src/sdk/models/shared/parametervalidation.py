from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import regexvalidation
from . import valuevalidation


@dataclass_json
@dataclass
class ParameterValidation:
    regex: Optional[regexvalidation.RegexValidation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    values: Optional[valuevalidation.ValueValidation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
