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
class LandlordSummaryModel:
    r"""LandlordSummaryModel
    Landlord Summary - Landing Page.
    """
    
    account_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountBalance') }})
    last_payment: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPayment'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tenancies: Optional[List[LandlordSummaryTenancyModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenancies') }})
    total_rent_arrears: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalRentArrears') }})
    
