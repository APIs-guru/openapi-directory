from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landlordsummarytenancymodel


@dataclass_json
@dataclass
class LandlordSummaryModel:
    account_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountBalance' }})
    last_payment: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastPayment', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tenancies: Optional[List[landlordsummarytenancymodel.LandlordSummaryTenancyModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tenancies' }})
    total_rent_arrears: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRentArrears' }})
    
