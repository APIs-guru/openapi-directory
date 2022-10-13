from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class RetrieveAUserPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveAUserRequest:
    path_params: RetrieveAUserPathParams = field(default=None)
    

@dataclass_json
@dataclass
class RetrieveAUser200ApplicationJSONPerson:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    

@dataclass_json
@dataclass
class RetrieveAUser200ApplicationJSON:
    avatar_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    person: Optional[RetrieveAUser200ApplicationJSONPerson] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class RetrieveAUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    retrieve_a_user_200_application_json_object: Optional[RetrieveAUser200ApplicationJSON] = field(default=None)
    
