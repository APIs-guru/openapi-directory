from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import standingorderdetails


@dataclass_json
@dataclass
class AdditionalInformationStructured:
    standing_order_details: standingorderdetails.StandingOrderDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standingOrderDetails' }})
    
