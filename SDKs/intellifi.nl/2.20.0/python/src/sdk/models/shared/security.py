from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeCookieSid:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'brain.sid' }})
    

@dataclass
class SchemeHeaderAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class SchemeQueryAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'key' }})
    

@dataclass
class SecurityOption1:
    cookie_sid: SchemeCookieSid = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class SecurityOption2:
    header_api_key: SchemeHeaderAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SecurityOption3:
    query_api_key: SchemeQueryAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    
