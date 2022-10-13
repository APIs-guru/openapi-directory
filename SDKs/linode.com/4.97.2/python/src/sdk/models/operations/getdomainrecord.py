from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDomainRecordPathParams:
    domain_id: int = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    record_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recordId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainRecordSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDomainRecordSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDomainRecordSecurity:
    option1: Optional[GetDomainRecordSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetDomainRecordSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetDomainRecordRequest:
    path_params: GetDomainRecordPathParams = field(default=None)
    security: GetDomainRecordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDomainRecordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetDomainRecordResponse:
    content_type: str = field(default=None)
    domain_record: Optional[shared.DomainRecord] = field(default=None)
    status_code: int = field(default=None)
    get_domain_record_default_application_json_object: Optional[GetDomainRecordDefaultApplicationJSON] = field(default=None)
    
