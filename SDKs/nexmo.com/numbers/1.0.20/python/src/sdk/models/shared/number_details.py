from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NumberDetails:
    country: str = field(metadata={'form': { 'field_name': 'country' }})
    msisdn: str = field(metadata={'form': { 'field_name': 'msisdn' }})
    target_api_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'target_api_key' }})
    
