from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LicenseAssignment:
    etags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etags' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productName' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    sku_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuId' }})
    sku_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuName' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
