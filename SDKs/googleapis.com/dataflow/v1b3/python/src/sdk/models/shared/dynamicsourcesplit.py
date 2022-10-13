from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import derivedsource
from . import derivedsource


@dataclass_json
@dataclass
class DynamicSourceSplit:
    primary: Optional[derivedsource.DerivedSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    residual: Optional[derivedsource.DerivedSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'residual' }})
    
