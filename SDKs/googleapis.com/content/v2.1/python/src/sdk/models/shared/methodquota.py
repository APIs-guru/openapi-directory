from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MethodQuota:
    r"""MethodQuota
    The quota information per method in the Content API.
    """
    
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    quota_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaLimit') }})
    quota_usage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaUsage') }})
    
