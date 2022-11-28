from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrderTrackingSignalShipmentLineItemMapping:
    r"""OrderTrackingSignalShipmentLineItemMapping
    Represents how many items are in the shipment for the given shipment_id and line_item_id.
    """
    
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    shipment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentId') }})
    
