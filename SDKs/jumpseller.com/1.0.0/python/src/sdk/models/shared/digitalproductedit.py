from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import digitalproducteditfields


@dataclass_json
@dataclass
class DigitalProductEdit:
    digital_product: Optional[digitalproducteditfields.DigitalProductEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digital_product' }})
    
