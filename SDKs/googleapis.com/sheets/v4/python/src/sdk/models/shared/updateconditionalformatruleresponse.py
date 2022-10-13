from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import conditionalformatrule
from . import conditionalformatrule


@dataclass_json
@dataclass
class UpdateConditionalFormatRuleResponse:
    new_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newIndex' }})
    new_rule: Optional[conditionalformatrule.ConditionalFormatRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newRule' }})
    old_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldIndex' }})
    old_rule: Optional[conditionalformatrule.ConditionalFormatRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldRule' }})
    
