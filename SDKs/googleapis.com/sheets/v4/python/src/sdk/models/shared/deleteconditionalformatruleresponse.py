from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import conditionalformatrule


@dataclass_json
@dataclass
class DeleteConditionalFormatRuleResponse:
    rule: Optional[conditionalformatrule.ConditionalFormatRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    
