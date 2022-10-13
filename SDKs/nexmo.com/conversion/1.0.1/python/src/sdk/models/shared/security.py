from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'api_key' }})
    

@dataclass
class SchemeAPISecret:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'api_secret' }})
    

@dataclass
class SchemeAPISig:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'sig' }})
    

@dataclass
class SecurityOption1:
    api_key: SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    api_secret: SchemeAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class SecurityOption2:
    api_key: SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    api_sig: SchemeAPISig = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    
