from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserFederationMapperRepresentation:
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    federation_mapper_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationMapperType' }})
    federation_provider_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationProviderDisplayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
