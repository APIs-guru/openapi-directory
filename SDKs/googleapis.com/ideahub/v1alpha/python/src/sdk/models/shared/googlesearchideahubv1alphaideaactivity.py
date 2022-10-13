from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    POST_DRAFTED = "POST_DRAFTED"
    POST_PUBLISHED = "POST_PUBLISHED"
    POST_DELETED = "POST_DELETED"
    POST_UNPUBLISHED = "POST_UNPUBLISHED"


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1alphaIdeaActivity:
    ideas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ideas' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    type: Optional[GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
