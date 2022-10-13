from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import servicemeshanalysismessagebase


@dataclass_json
@dataclass
class ServiceMeshAnalysisMessage:
    args: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    message_base: Optional[servicemeshanalysismessagebase.ServiceMeshAnalysisMessageBase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageBase' }})
    resource_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcePaths' }})
    
