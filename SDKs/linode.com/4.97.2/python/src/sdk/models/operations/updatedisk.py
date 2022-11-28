from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateDiskPathParams:
    disk_id: int = field(metadata={'path_param': { 'field_name': 'diskId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDiskSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateDiskDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateDiskRequest:
    path_params: UpdateDiskPathParams = field()
    request: shared.DiskInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDiskSecurity = field()
    

@dataclass
class UpdateDiskResponse:
    content_type: str = field()
    status_code: int = field()
    disk: Optional[shared.Disk] = field(default=None)
    update_disk_default_application_json_object: Optional[UpdateDiskDefaultApplicationJSON] = field(default=None)
    
