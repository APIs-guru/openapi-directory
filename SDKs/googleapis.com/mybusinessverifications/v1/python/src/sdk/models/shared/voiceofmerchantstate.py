from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import complywithguidelines
from . import verify


@dataclass_json
@dataclass
class VoiceOfMerchantState:
    comply_with_guidelines: Optional[complywithguidelines.ComplyWithGuidelines] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complyWithGuidelines' }})
    has_business_authority: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasBusinessAuthority' }})
    has_voice_of_merchant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasVoiceOfMerchant' }})
    resolve_ownership_conflict: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolveOwnershipConflict' }})
    verify: Optional[verify.Verify] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verify' }})
    wait_for_voice_of_merchant: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitForVoiceOfMerchant' }})
    
