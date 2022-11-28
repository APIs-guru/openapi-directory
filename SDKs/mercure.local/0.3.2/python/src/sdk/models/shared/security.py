from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeBearer:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeCookie:
    api_key: str = field(metadata={'security': { 'field_name': 'mercureAuthorization' }})
    

@dataclass
class Security:
    bearer: Optional[SchemeBearer] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    cookie: Optional[SchemeCookie] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    
