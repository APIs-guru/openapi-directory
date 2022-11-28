from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaUserInfo:
    r"""GoogleCloudDiscoveryengineV1alphaUserInfo
    Information of an end user.
    """
    
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
