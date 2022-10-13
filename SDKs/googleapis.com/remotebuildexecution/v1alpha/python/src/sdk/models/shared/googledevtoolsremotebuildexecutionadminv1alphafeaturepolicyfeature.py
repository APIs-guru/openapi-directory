from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum(str, Enum):
    POLICY_UNSPECIFIED = "POLICY_UNSPECIFIED"
    ALLOWED = "ALLOWED"
    FORBIDDEN = "FORBIDDEN"
    RESTRICTED = "RESTRICTED"


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature:
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedValues' }})
    policy: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    
