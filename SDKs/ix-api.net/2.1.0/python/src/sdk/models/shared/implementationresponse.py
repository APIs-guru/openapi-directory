from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImplementationResponse:
    schema_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema_version' }})
    service_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_version' }})
    supported_network_feature_config_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_network_feature_config_types' }})
    supported_network_feature_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_network_feature_types' }})
    supported_network_service_config_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_network_service_config_types' }})
    supported_network_service_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_network_service_types' }})
    supported_operations: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_operations' }})
    
