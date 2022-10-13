from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObMerchantDetails1:
    merchant_category_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MerchantCategoryCode' }})
    merchant_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MerchantName' }})
    
