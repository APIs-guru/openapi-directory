from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateDomainRecordPathParams:
    domain_id: int = field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    record_id: int = field(metadata={'path_param': { 'field_name': 'recordId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDomainRecordSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateDomainRecordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateDomainRecordRequest:
    path_params: UpdateDomainRecordPathParams = field()
    request: shared.DomainRecordInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDomainRecordSecurity = field()
    

@dataclass
class UpdateDomainRecordResponse:
    content_type: str = field()
    status_code: int = field()
    domain_record: Optional[shared.DomainRecord] = field(default=None)
    update_domain_record_default_application_json_object: Optional[UpdateDomainRecordDefaultApplicationJSON] = field(default=None)
    
