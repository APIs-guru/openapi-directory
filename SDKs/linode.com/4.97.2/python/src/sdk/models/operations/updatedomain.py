from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateDomainPathParams:
    domain_id: int = field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDomainSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateDomainDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateDomainRequest:
    path_params: UpdateDomainPathParams = field()
    request: shared.DomainInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDomainSecurity = field()
    

@dataclass
class UpdateDomainResponse:
    content_type: str = field()
    status_code: int = field()
    domain: Optional[shared.Domain] = field(default=None)
    update_domain_default_application_json_object: Optional[UpdateDomainDefaultApplicationJSON] = field(default=None)
    
