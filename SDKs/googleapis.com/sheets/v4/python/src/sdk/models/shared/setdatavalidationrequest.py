from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gridrange
from . import datavalidationrule


@dataclass_json
@dataclass
class SetDataValidationRequest:
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    rule: Optional[datavalidationrule.DataValidationRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    
