from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentServiceProviderLinkInfo:
    external_account_business_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalAccountBusinessCountry' }})
    external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalAccountId' }})
    
