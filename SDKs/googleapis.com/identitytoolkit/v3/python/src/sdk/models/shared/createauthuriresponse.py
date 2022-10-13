from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateAuthURIResponse:
    all_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allProviders' }})
    auth_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authUri' }})
    captcha_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captchaRequired' }})
    for_existing_provider: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forExistingProvider' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerId' }})
    registered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registered' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    signin_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signinMethods' }})
    
