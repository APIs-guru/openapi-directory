from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ActionFailedSecurityPolicyApply:
    r"""GoogleCloudDataplexV1ActionFailedSecurityPolicyApply
    Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource.
    """
    
    asset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    
