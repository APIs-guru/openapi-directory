from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sheetschartreferencesuggestionstate


@dataclass_json
@dataclass
class LinkedContentReferenceSuggestionState:
    sheets_chart_reference_suggestion_state: Optional[sheetschartreferencesuggestionstate.SheetsChartReferenceSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetsChartReferenceSuggestionState' }})
    
