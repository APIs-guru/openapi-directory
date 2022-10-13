from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import varianteditfields


@dataclass_json
@dataclass
class VariantEdit:
    variant: Optional[varianteditfields.VariantEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variant' }})
    
