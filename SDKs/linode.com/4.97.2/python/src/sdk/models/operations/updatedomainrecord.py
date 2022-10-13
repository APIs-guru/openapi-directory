from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDomainRecordPathParams:
    domain_id: int = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    record_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recordId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDomainRecordSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateDomainRecordSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateDomainRecordSecurity:
    option1: Optional[UpdateDomainRecordSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateDomainRecordSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateDomainRecordRequest:
    path_params: UpdateDomainRecordPathParams = field(default=None)
    request: shared.DomainRecord = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDomainRecordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateDomainRecordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateDomainRecordResponse:
    content_type: str = field(default=None)
    domain_record: Optional[shared.DomainRecord] = field(default=None)
    status_code: int = field(default=None)
    update_domain_record_default_application_json_object: Optional[UpdateDomainRecordDefaultApplicationJSON] = field(default=None)
    
