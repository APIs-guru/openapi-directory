from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeBearer:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeCookie:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'mercureAuthorization' }})
    

@dataclass
class SecurityOption1:
    bearer: SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SecurityOption2:
    cookie: SchemeCookie = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    
