from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyTopicEntry:
    r"""PolicyTopicEntry
    Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
    """
    
    evidences: Optional[List[PolicyTopicEvidence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidences') }})
    help_center_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpCenterUrl') }})
    policy_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTopic') }})
    
