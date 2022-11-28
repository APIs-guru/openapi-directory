from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LinkedContentReferenceSuggestionState:
    r"""LinkedContentReferenceSuggestionState
    A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    sheets_chart_reference_suggestion_state: Optional[SheetsChartReferenceSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetsChartReferenceSuggestionState') }})
    
