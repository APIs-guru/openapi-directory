from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LandlordRentOustandingItem:
    r"""LandlordRentOustandingItem
    Outstanding Rent
    """
    
    debt_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtDays') }})
    outstanding_rent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutstandingRent') }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Property') }})
    tenant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenant') }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TenantID') }})
    
