from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import promotion


@dataclass_json
@dataclass
class AccountCreditCard:
    expiry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry' }})
    last_four: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_four' }})
    

@dataclass_json
@dataclass
class Account:
    active_promotions: Optional[List[promotion.Promotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_promotions' }})
    active_since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_since', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    address_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_1' }})
    address_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_2' }})
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    balance_uninvoiced: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance_uninvoiced' }})
    capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    credit_card: Optional[AccountCreditCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credit_card' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    euuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'euuid' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tax_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_id' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
