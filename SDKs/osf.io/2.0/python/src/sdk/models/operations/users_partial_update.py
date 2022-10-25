from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class UsersPartialUpdatePathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UsersPartialUpdateUserAttributes:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    date_registered: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_registered', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family_name' }})
    full_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'full_name' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'given_name' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    middle_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_names' }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    

@dataclass_json
@dataclass
class UsersPartialUpdateUserLinks:
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    profile_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile_image' }})
    

@dataclass_json
@dataclass
class UsersPartialUpdateUserRelationships:
    institutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'institutions' }})
    nodes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    

@dataclass_json
@dataclass
class UsersPartialUpdateUser:
    attributes: UsersPartialUpdateUserAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: UsersPartialUpdateUserLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: UsersPartialUpdateUserRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class UsersPartialUpdateRequest:
    path_params: UsersPartialUpdatePathParams = field(default=None)
    request: UsersPartialUpdateUser = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
