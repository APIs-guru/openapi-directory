from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import derived


@dataclass_json
@dataclass
class GrafeasV1beta1ImageDetails:
    derived_image: Optional[derived.Derived] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'derivedImage' }})
    
