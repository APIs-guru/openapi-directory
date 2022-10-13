from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesearchideahubv1alphatopic


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1alphaIdea:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    topics: Optional[List[googlesearchideahubv1alphatopic.GoogleSearchIdeahubV1alphaTopic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    
