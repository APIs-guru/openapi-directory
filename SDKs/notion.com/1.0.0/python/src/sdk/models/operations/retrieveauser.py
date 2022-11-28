from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RetrieveAUserPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RetrieveAUser200ApplicationJSONPerson:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass_json
@dataclass
class RetrieveAUser200ApplicationJSON:
    avatar_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    person: Optional[RetrieveAUser200ApplicationJSONPerson] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class RetrieveAUserRequest:
    path_params: RetrieveAUserPathParams = field()
    

@dataclass
class RetrieveAUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    retrieve_a_user_200_application_json_object: Optional[RetrieveAUser200ApplicationJSON] = field(default=None)
    
