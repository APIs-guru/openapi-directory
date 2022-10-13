from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ConfigManagementPolicyControllerMonitoringBackendsEnum(str, Enum):
    MONITORING_BACKEND_UNSPECIFIED = "MONITORING_BACKEND_UNSPECIFIED"
    PROMETHEUS = "PROMETHEUS"
    CLOUD_MONITORING = "CLOUD_MONITORING"


@dataclass_json
@dataclass
class ConfigManagementPolicyControllerMonitoring:
    backends: Optional[List[ConfigManagementPolicyControllerMonitoringBackendsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backends' }})
    
