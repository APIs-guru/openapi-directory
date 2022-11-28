from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeCookieSid:
    api_key: str = field(metadata={'security': { 'field_name': 'brain.sid' }})
    

@dataclass
class SchemeHeaderAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class SchemeQueryAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'key' }})
    

@dataclass
class Security:
    cookie_sid: Optional[SchemeCookieSid] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    header_api_key: Optional[SchemeHeaderAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    query_api_key: Optional[SchemeQueryAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
