from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import serviceidentity


@dataclass_json
@dataclass
class GenerateServiceIdentityResponse:
    identity: Optional[serviceidentity.ServiceIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    
