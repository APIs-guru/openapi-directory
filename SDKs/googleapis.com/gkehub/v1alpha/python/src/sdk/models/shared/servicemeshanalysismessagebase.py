from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import servicemeshtype

class ServiceMeshAnalysisMessageBaseLevelEnum(str, Enum):
    LEVEL_UNSPECIFIED = "LEVEL_UNSPECIFIED"
    ERROR = "ERROR"
    WARNING = "WARNING"
    INFO = "INFO"


@dataclass_json
@dataclass
class ServiceMeshAnalysisMessageBase:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationUrl' }})
    level: Optional[ServiceMeshAnalysisMessageBaseLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    type: Optional[servicemeshtype.ServiceMeshType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
