from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import discovered


@dataclass_json
@dataclass
class GrafeasV1beta1DiscoveryDetails:
    discovered: Optional[discovered.Discovered] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discovered' }})
    
