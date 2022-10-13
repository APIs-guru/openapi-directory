from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SigningBasket:
    consent_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentIds' }})
    payment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentIds' }})
    
