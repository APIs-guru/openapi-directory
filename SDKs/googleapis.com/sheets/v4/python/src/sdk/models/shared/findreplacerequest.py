from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gridrange


@dataclass_json
@dataclass
class FindReplaceRequest:
    all_sheets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allSheets' }})
    find: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'find' }})
    include_formulas: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeFormulas' }})
    match_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchCase' }})
    match_entire_cell: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchEntireCell' }})
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    replacement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replacement' }})
    search_by_regex: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchByRegex' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    
