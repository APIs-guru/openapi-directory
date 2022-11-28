from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VoiceOfMerchantState:
    r"""VoiceOfMerchantState
    Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
    """
    
    comply_with_guidelines: Optional[ComplyWithGuidelines] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complyWithGuidelines') }})
    has_business_authority: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasBusinessAuthority') }})
    has_voice_of_merchant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasVoiceOfMerchant') }})
    resolve_ownership_conflict: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolveOwnershipConflict') }})
    verify: Optional[Verify] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verify') }})
    wait_for_voice_of_merchant: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitForVoiceOfMerchant') }})
    
