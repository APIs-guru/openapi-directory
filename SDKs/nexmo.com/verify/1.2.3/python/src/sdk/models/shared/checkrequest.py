from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CheckRequest:
    api_key: str = field(default=None, metadata={'form': { 'field_name': 'api_key' }})
    api_secret: str = field(default=None, metadata={'form': { 'field_name': 'api_secret' }})
    code: str = field(default=None, metadata={'form': { 'field_name': 'code' }})
    ip_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ip_address' }})
    request_id: str = field(default=None, metadata={'form': { 'field_name': 'request_id' }})
    
