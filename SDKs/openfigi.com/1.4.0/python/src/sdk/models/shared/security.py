from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAPIKeyAuth:
    api_key: str = field(metadata={'security': { 'field_name': 'X-OPENFIGI-APIKEY' }})
    

@dataclass
class Security:
    api_key_auth: Optional[SchemeAPIKeyAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
