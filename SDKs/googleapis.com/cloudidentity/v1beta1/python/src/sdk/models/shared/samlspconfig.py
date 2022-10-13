from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SamlSpConfig:
    assertion_consumer_service_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assertionConsumerServiceUri' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    
