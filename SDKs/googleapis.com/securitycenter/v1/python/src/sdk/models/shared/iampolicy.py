from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IamPolicy:
    r"""IamPolicy
    Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.
    """
    
    policy_blob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyBlob') }})
    
