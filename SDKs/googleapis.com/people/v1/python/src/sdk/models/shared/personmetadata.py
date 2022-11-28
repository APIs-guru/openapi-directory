from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PersonMetadataObjectTypeEnum(str, Enum):
    OBJECT_TYPE_UNSPECIFIED = "OBJECT_TYPE_UNSPECIFIED"
    PERSON = "PERSON"
    PAGE = "PAGE"


@dataclass_json
@dataclass
class PersonMetadata:
    r"""PersonMetadata
    The metadata about a person.
    """
    
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    linked_people_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedPeopleResourceNames') }})
    object_type: Optional[PersonMetadataObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    previous_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousResourceNames') }})
    sources: Optional[List[Source]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    

@dataclass_json
@dataclass
class PersonMetadataInput:
    r"""PersonMetadataInput
    The metadata about a person.
    """
    
    sources: Optional[List[SourceInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
