from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FulfillmentFields:
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_id') }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_type') }})
    shipment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_status') }})
    tracking_company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_company') }})
    tracking_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_number') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
