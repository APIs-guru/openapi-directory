from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesearchideahubv1betatopic


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1betaIdea:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    topics: Optional[List[googlesearchideahubv1betatopic.GoogleSearchIdeahubV1betaTopic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    
