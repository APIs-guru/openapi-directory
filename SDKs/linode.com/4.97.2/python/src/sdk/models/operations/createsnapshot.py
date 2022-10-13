from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSnapshotPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSnapshotRequestBody:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    

@dataclass
class CreateSnapshotSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateSnapshotSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateSnapshotSecurity:
    option1: Optional[CreateSnapshotSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateSnapshotSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateSnapshotRequest:
    path_params: CreateSnapshotPathParams = field(default=None)
    request: CreateSnapshotRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSnapshotSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateSnapshotDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateSnapshotResponse:
    backup: Optional[shared.Backup] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_snapshot_default_application_json_object: Optional[CreateSnapshotDefaultApplicationJSON] = field(default=None)
    
