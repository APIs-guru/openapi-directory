from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1suggestionitem


@dataclass_json
@dataclass
class GoogleAppsCardV1Suggestions:
    items: Optional[List[googleappscardv1suggestionitem.GoogleAppsCardV1SuggestionItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
