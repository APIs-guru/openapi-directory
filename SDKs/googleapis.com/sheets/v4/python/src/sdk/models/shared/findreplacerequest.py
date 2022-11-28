from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindReplaceRequest:
    r"""FindReplaceRequest
    Finds and replaces data in cells over a range, sheet, or all sheets.
    """
    
    all_sheets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allSheets') }})
    find: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('find') }})
    include_formulas: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeFormulas') }})
    match_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchCase') }})
    match_entire_cell: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchEntireCell') }})
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    replacement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacement') }})
    search_by_regex: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchByRegex') }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
