from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SamlIdpConfig:
    change_password_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changePasswordUri' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    logout_redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoutRedirectUri' }})
    single_sign_on_service_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleSignOnServiceUri' }})
    
