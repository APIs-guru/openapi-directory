from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import userconfiguration
from . import userpolicy


@dataclass_json
@dataclass
class UserDto:
    configuration: Optional[userconfiguration.UserConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    enable_auto_login: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAutoLogin' }})
    has_configured_easy_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasConfiguredEasyPassword' }})
    has_configured_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasConfiguredPassword' }})
    has_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasPassword' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    last_activity_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastActivityDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_login_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastLoginDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    policy: Optional[userpolicy.UserPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    primary_image_aspect_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryImageAspectRatio' }})
    primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryImageTag' }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    
