from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentityProviderMapperRepresentation:
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identity_provider_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProviderAlias' }})
    identity_provider_mapper: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProviderMapper' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
