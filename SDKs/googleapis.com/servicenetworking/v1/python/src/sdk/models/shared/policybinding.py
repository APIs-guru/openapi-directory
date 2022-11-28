from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PolicyBinding:
    r"""PolicyBinding
    Grouping of IAM role and IAM member.
    """
    
    member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
