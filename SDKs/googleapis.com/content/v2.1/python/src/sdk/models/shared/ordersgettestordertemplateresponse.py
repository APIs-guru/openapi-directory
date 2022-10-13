from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testorder


@dataclass_json
@dataclass
class OrdersGetTestOrderTemplateResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    template: Optional[testorder.TestOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    
