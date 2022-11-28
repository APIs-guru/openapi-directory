from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class MigrateLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrateLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class MigrateLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class MigrateLinodeInstanceRequest:
    path_params: MigrateLinodeInstancePathParams = field()
    security: MigrateLinodeInstanceSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MigrateLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    migrate_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    migrate_linode_instance_default_application_json_object: Optional[MigrateLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
