from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import source

class PersonMetadataObjectTypeEnum(str, Enum):
    OBJECT_TYPE_UNSPECIFIED = "OBJECT_TYPE_UNSPECIFIED"
    PERSON = "PERSON"
    PAGE = "PAGE"


@dataclass_json
@dataclass
class PersonMetadata:
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    linked_people_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedPeopleResourceNames' }})
    object_type: Optional[PersonMetadataObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    previous_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousResourceNames' }})
    sources: Optional[List[source.Source]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
