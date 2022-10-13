from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import discountresponse
from . import productresponse


@dataclass_json
@dataclass
class LibraryResponse:
    deleted_discounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedDiscounts' }})
    deleted_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedProducts' }})
    discounts: Optional[List[discountresponse.DiscountResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discounts' }})
    from_event_log_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromEventLogUuid' }})
    products: Optional[List[productresponse.ProductResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    until_event_log_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'untilEventLogUuid' }})
    
