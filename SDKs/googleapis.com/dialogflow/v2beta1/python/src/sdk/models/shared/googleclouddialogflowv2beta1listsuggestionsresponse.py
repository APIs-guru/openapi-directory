from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1suggestion


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListSuggestionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    suggestions: Optional[List[googleclouddialogflowv2beta1suggestion.GoogleCloudDialogflowV2beta1Suggestion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    
