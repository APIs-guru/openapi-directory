from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productdeliverytimeareadeliverytime
from . import productid


@dataclass_json
@dataclass
class ProductDeliveryTime:
    area_delivery_times: Optional[List[productdeliverytimeareadeliverytime.ProductDeliveryTimeAreaDeliveryTime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'areaDeliveryTimes' }})
    product_id: Optional[productid.ProductID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
