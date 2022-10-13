from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountShippingImprovements:
    allow_shipping_improvements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowShippingImprovements' }})
    
