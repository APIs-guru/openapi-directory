from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LandlordSummaryTenancyModel:
    bond: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bond' }})
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchID' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    global_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalReference' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    maintenance_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceJobs' }})
    managed_rent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedRent' }})
    property_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertyAddress' }})
    rent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rent' }})
    rent_arrears: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RentArrears' }})
    rent_collected: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RentCollected' }})
    tenancy_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TenancyProperty' }})
    tenancy_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TenancyState' }})
    
