from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LandlordTenancyModel:
    r"""LandlordTenancyModel
    Landlord Tenancy Model.
    """
    
    actual_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActualEndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    beds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beds') }})
    bond: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bond') }})
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchID') }})
    certificates: Optional[List[LandlordMaintenanceCertificateModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificates') }})
    documents: Optional[List[LettingsLandlordDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Documents') }})
    fixed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    global_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalReference') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }})
    inspections: Optional[List[LandlordLettingsInspectionModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inspections') }})
    managed_rent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManagedRent') }})
    preferences: Optional[List[LandlordMaintenancePreferenceModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Preferences') }})
    previous_rent_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousRentAmount') }})
    property_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyAddress') }})
    rent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rent') }})
    rent_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RentAmount') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tenancy_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TenancyProperty') }})
    tenancy_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TenancyState') }})
    tenants: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenants') }})
    
