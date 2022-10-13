from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaRuntimeEntitySchema:
    array_field_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayFieldSchema' }})
    entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    field_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldSchema' }})
    
