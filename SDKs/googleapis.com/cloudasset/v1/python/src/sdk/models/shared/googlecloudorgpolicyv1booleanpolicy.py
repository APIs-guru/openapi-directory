from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV1BooleanPolicy:
    r"""GoogleCloudOrgpolicyV1BooleanPolicy
    Used in `policy_type` to specify how `boolean_policy` will behave at this resource.
    """
    
    enforced: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforced') }})
    
