from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorTemplate:
    messages: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    service_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    template40x: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template40x' }})
    template50x: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template50x' }})
    template_build: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateBuild' }})
    template_maintenance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMaintenance' }})
    
