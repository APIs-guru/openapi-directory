from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountIdentifier:
    aggregator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregatorId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    
