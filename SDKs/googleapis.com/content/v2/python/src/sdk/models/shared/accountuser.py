from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountUser:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    order_manager: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderManager' }})
    payments_analyst: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsAnalyst' }})
    payments_manager: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsManager' }})
    
