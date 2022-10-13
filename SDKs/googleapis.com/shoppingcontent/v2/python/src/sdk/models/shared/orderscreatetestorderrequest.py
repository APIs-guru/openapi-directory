from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testorder


@dataclass_json
@dataclass
class OrdersCreateTestOrderRequest:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    test_order: Optional[testorder.TestOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testOrder' }})
    
