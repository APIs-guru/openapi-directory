from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateSnapshotPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSnapshotRequestBody:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

@dataclass
class CreateSnapshotSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateSnapshotDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateSnapshotRequest:
    path_params: CreateSnapshotPathParams = field()
    request: CreateSnapshotRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSnapshotSecurity = field()
    

@dataclass
class CreateSnapshotResponse:
    content_type: str = field()
    status_code: int = field()
    backup: Optional[shared.Backup] = field(default=None)
    create_snapshot_default_application_json_object: Optional[CreateSnapshotDefaultApplicationJSON] = field(default=None)
    
