from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CsmSettings:
    r"""CsmSettings
    Configuration for RCToken generated for service mesh workloads protected by IAP. RCToken are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for service mesh deployments, and can be scoped to a single mesh by configuring the audience field accordingly.
    """
    
    rctoken_aud: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rctokenAud') }})
    
