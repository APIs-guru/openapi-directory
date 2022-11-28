from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PluginSecurityInfo:
    r"""PluginSecurityInfo
    Plugin security info.
    """
    
    is_mb_supporter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsMbSupporter') }})
    supporter_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupporterKey') }})
    
