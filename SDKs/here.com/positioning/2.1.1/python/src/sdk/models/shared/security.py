from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'apiKey' }})
    

@dataclass
class SchemeAccessToken:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    api_key: Optional[SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    access_token: Optional[SchemeAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
