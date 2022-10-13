from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteDomainRecordPathParams:
    domain_id: int = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    record_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recordId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDomainRecordSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteDomainRecordSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteDomainRecordSecurity:
    option1: Optional[DeleteDomainRecordSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteDomainRecordSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteDomainRecordRequest:
    path_params: DeleteDomainRecordPathParams = field(default=None)
    security: DeleteDomainRecordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteDomainRecordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteDomainRecordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_domain_record_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_domain_record_default_application_json_object: Optional[DeleteDomainRecordDefaultApplicationJSON] = field(default=None)
    
