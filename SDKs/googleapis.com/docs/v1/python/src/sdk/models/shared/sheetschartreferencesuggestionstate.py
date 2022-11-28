from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SheetsChartReferenceSuggestionState:
    r"""SheetsChartReferenceSuggestionState
    A mask that indicates which of the fields on the base SheetsChartReference have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    chart_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartIdSuggested') }})
    spreadsheet_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetIdSuggested') }})
    
