from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDomainRecordPathParams:
    domain_id: int = field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    record_id: int = field(metadata={'path_param': { 'field_name': 'recordId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainRecordSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDomainRecordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetDomainRecordRequest:
    path_params: GetDomainRecordPathParams = field()
    security: GetDomainRecordSecurity = field()
    

@dataclass
class GetDomainRecordResponse:
    content_type: str = field()
    status_code: int = field()
    domain_record: Optional[shared.DomainRecord] = field(default=None)
    get_domain_record_default_application_json_object: Optional[GetDomainRecordDefaultApplicationJSON] = field(default=None)
    
