from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChannelAuditDetails:
    community_guidelines_good_standing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communityGuidelinesGoodStanding' }})
    content_id_claims_good_standing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentIdClaimsGoodStanding' }})
    copyright_strikes_good_standing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyrightStrikesGoodStanding' }})
    
