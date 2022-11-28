from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FindReplaceResponse:
    r"""FindReplaceResponse
    The result of the find/replace.
    """
    
    formulas_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formulasChanged') }})
    occurrences_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrencesChanged') }})
    rows_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowsChanged') }})
    sheets_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetsChanged') }})
    values_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuesChanged') }})
    
