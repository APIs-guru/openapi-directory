from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCompletionDetail:
    completion_attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionAttributionToken' }})
    selected_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedPosition' }})
    selected_suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedSuggestion' }})
    
