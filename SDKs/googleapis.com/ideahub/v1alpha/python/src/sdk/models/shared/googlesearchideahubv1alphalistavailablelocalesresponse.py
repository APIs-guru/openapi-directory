from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesearchideahubv1alphaavailablelocale


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1alphaListAvailableLocalesResponse:
    available_locales: Optional[List[googlesearchideahubv1alphaavailablelocale.GoogleSearchIdeahubV1alphaAvailableLocale]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableLocales' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
