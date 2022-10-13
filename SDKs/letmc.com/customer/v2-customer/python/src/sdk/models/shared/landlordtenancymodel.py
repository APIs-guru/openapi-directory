from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landlordmaintenancecertificatemodel
from . import lettingslandlorddocument
from . import landlordlettingsinspectionmodel
from . import landlordmaintenancepreferencemodel


@dataclass_json
@dataclass
class LandlordTenancyModel:
    actual_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    beds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Beds' }})
    bond: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bond' }})
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchID' }})
    certificates: Optional[List[landlordmaintenancecertificatemodel.LandlordMaintenanceCertificateModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificates' }})
    documents: Optional[List[lettingslandlorddocument.LettingsLandlordDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Documents' }})
    fixed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    global_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalReference' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    inspections: Optional[List[landlordlettingsinspectionmodel.LandlordLettingsInspectionModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inspections' }})
    managed_rent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedRent' }})
    preferences: Optional[List[landlordmaintenancepreferencemodel.LandlordMaintenancePreferenceModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Preferences' }})
    previous_rent_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreviousRentAmount' }})
    property_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertyAddress' }})
    rent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rent' }})
    rent_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RentAmount' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tenancy_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TenancyProperty' }})
    tenancy_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TenancyState' }})
    tenants: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tenants' }})
    
