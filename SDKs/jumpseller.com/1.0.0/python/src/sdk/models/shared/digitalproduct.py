from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import digitalproductfields


@dataclass_json
@dataclass
class DigitalProduct:
    digital_product: Optional[digitalproductfields.DigitalProductFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digital_product' }})
    
