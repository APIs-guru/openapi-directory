from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'apiKey' }})
    

@dataclass
class SchemeAccessToken:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SecurityOption1:
    api_key: SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class SecurityOption2:
    access_token: SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    
