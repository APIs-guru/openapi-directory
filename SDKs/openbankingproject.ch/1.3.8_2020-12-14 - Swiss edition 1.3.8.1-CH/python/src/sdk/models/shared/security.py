from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeBearerAuthOAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    bearer_auth_o_auth: Optional[SchemeBearerAuthOAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
