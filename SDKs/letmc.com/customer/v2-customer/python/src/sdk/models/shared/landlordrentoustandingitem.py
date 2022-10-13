from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LandlordRentOustandingItem:
    debt_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtDays' }})
    outstanding_rent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutstandingRent' }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Property' }})
    tenant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tenant' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TenantID' }})
    
