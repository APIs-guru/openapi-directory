from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configpropertyrepresentation


@dataclass_json
@dataclass
class AuthenticatorConfigInfoRepresentation:
    help_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helpText' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[List[configpropertyrepresentation.ConfigPropertyRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerId' }})
    
