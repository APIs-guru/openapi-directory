from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest:
    r"""GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest
    Request for TroubleshootIamPolicy.
    """
    
    access_tuple: Optional[GoogleCloudPolicytroubleshooterV1AccessTuple] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTuple') }})
    
