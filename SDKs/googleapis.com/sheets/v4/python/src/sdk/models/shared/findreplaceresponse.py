from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FindReplaceResponse:
    formulas_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formulasChanged' }})
    occurrences_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurrencesChanged' }})
    rows_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowsChanged' }})
    sheets_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetsChanged' }})
    values_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valuesChanged' }})
    
