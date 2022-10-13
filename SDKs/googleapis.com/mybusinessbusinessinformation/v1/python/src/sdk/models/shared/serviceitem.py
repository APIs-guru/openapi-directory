from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import freeformserviceitem
from . import money
from . import structuredserviceitem


@dataclass_json
@dataclass
class ServiceItem:
    free_form_service_item: Optional[freeformserviceitem.FreeFormServiceItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeFormServiceItem' }})
    price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    structured_service_item: Optional[structuredserviceitem.StructuredServiceItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredServiceItem' }})
    
