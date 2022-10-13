from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import billinginformation


@dataclass_json
@dataclass
class AccountUpdatePartial:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    billing_information: Optional[billinginformation.BillingInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_information' }})
    discoverable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoverable' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    legal_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legal_name' }})
    managing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    metro_area_network_presence: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_area_network_presence' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
