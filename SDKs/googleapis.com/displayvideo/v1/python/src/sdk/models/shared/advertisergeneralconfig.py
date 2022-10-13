from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdvertiserGeneralConfig:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    domain_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainUrl' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
