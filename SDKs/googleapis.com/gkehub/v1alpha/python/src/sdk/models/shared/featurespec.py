from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import membershipspec

class FeatureSpecProvisionGoogleCaEnum(str, Enum):
    GOOGLE_CA_PROVISIONING_UNSPECIFIED = "GOOGLE_CA_PROVISIONING_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class FeatureSpec:
    default_config: Optional[membershipspec.MembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultConfig' }})
    provision_google_ca: Optional[FeatureSpecProvisionGoogleCaEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisionGoogleCa' }})
    
