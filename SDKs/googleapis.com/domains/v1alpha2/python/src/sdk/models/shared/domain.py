from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import money

class DomainResourceStateEnum(str, Enum):
    RESOURCE_STATE_UNSPECIFIED = "RESOURCE_STATE_UNSPECIFIED"
    IMPORTABLE = "IMPORTABLE"
    UNSUPPORTED = "UNSUPPORTED"
    SUSPENDED = "SUSPENDED"
    EXPIRED = "EXPIRED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class Domain:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    resource_state: Optional[DomainResourceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceState' }})
    yearly_price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yearlyPrice' }})
    
