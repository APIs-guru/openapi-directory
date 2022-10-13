from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesearchideahubv1alphaidea


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1alphaListIdeasResponse:
    ideas: Optional[List[googlesearchideahubv1alphaidea.GoogleSearchIdeahubV1alphaIdea]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ideas' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
