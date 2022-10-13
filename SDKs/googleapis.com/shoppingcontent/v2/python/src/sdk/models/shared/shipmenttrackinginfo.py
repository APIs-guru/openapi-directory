from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShipmentTrackingInfo:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    tracking_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNumber' }})
    
