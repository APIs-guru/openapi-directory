from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteConditionalFormatRuleRequest:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    
