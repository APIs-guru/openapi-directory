from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ECommercePlatformLinkInfo:
    r"""ECommercePlatformLinkInfo
    Additional information required for E_COMMERCE_PLATFORM link type.
    """
    
    external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountId') }})
    
