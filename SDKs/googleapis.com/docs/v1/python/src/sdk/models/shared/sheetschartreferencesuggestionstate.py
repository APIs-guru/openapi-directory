from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SheetsChartReferenceSuggestionState:
    chart_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartIdSuggested' }})
    spreadsheet_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetIdSuggested' }})
    
