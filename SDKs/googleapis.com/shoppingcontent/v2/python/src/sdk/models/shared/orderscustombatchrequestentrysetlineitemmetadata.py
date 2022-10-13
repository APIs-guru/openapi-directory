from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ordermerchantprovidedannotation


@dataclass_json
@dataclass
class OrdersCustomBatchRequestEntrySetLineItemMetadata:
    annotations: Optional[List[ordermerchantprovidedannotation.OrderMerchantProvidedAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
