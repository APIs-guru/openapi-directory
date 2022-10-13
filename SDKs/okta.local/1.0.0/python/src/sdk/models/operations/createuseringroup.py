from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateUserInGroupQueryParams:
    activate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'activate', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateUserInGroupRequestBodyProfile:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    

@dataclass_json
@dataclass
class CreateUserInGroupRequestBody:
    group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupIds' }})
    profile: Optional[CreateUserInGroupRequestBodyProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    

@dataclass
class CreateUserInGroupRequest:
    query_params: CreateUserInGroupQueryParams = field(default=None)
    request: Optional[CreateUserInGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateUserInGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
