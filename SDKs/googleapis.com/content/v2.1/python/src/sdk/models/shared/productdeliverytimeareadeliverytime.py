from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deliveryarea
from . import productdeliverytimeareadeliverytimedeliverytime


@dataclass_json
@dataclass
class ProductDeliveryTimeAreaDeliveryTime:
    delivery_area: Optional[deliveryarea.DeliveryArea] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryArea' }})
    delivery_time: Optional[productdeliverytimeareadeliverytimedeliverytime.ProductDeliveryTimeAreaDeliveryTimeDeliveryTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryTime' }})
    
