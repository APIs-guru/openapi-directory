from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LandlordSummaryTenancyModel:
    r"""LandlordSummaryTenancyModel
    Landlord Summary - Landing Page.
    """
    
    bond: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bond') }})
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchID') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    global_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalReference') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }})
    maintenance_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintenanceJobs') }})
    managed_rent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManagedRent') }})
    property_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyAddress') }})
    rent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rent') }})
    rent_arrears: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RentArrears') }})
    rent_collected: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RentCollected') }})
    tenancy_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TenancyProperty') }})
    tenancy_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TenancyState') }})
    
