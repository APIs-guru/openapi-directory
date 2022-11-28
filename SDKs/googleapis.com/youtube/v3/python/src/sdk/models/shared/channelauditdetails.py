from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChannelAuditDetails:
    r"""ChannelAuditDetails
    The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
    """
    
    community_guidelines_good_standing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communityGuidelinesGoodStanding') }})
    content_id_claims_good_standing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentIdClaimsGoodStanding') }})
    copyright_strikes_good_standing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrightStrikesGoodStanding') }})
    
