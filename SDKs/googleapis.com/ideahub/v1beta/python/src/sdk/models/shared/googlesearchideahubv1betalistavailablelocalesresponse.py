from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesearchideahubv1betaavailablelocale


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1betaListAvailableLocalesResponse:
    available_locales: Optional[List[googlesearchideahubv1betaavailablelocale.GoogleSearchIdeahubV1betaAvailableLocale]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableLocales' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
