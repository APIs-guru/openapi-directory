from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import conditionalformatrule


@dataclass_json
@dataclass
class UpdateConditionalFormatRuleRequest:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    new_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newIndex' }})
    rule: Optional[conditionalformatrule.ConditionalFormatRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    
