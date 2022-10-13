from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import package


@dataclass_json
@dataclass
class EffectiveGuestPolicySourcedPackage:
    package: Optional[package.Package] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
