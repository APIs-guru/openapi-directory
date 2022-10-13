from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ImportDomainSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ImportDomainSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ImportDomainSecurity:
    option1: Optional[ImportDomainSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ImportDomainSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ImportDomainRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ImportDomainSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ImportDomainDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ImportDomainResponse:
    content_type: str = field(default=None)
    domain: Optional[shared.Domain] = field(default=None)
    status_code: int = field(default=None)
    import_domain_default_application_json_object: Optional[ImportDomainDefaultApplicationJSON] = field(default=None)
    
