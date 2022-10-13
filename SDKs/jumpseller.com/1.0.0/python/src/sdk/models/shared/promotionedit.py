from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import promotioneditfields


@dataclass_json
@dataclass
class PromotionEdit:
    promotion: Optional[promotioneditfields.PromotionEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotion' }})
    
