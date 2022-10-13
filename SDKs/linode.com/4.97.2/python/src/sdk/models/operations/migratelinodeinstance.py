from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class MigrateLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrateLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class MigrateLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MigrateLinodeInstanceSecurity:
    option1: Optional[MigrateLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MigrateLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class MigrateLinodeInstanceRequest:
    path_params: MigrateLinodeInstancePathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: MigrateLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class MigrateLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class MigrateLinodeInstanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    migrate_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    migrate_linode_instance_default_application_json_object: Optional[MigrateLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
