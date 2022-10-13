from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import promotionfields


@dataclass_json
@dataclass
class Promotion:
    promotion: Optional[promotionfields.PromotionFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotion' }})
    
