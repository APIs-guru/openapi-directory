from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleServiceAccountCreds:
    auth_provider_x509_cert_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_provider_x509_cert_url' }})
    auth_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_uri' }})
    client_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_email' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_x509_cert_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_x509_cert_url' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_key' }})
    private_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_key_id' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_id' }})
    token_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_uri' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
