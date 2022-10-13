from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AnthosVMSubFeatureSpec:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    migrate_spec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migrateSpec' }})
    service_mesh_spec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceMeshSpec' }})
    
