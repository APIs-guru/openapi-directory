from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GkeWorkload:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceName' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    top_level_controller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topLevelControllerName' }})
    top_level_controller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topLevelControllerType' }})
    
