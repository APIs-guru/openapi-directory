from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstandthirdpartyaudiencegroup
from . import googleaudiencegroup
from . import combinedaudiencegroup
from . import customlistgroup
from . import firstandthirdpartyaudiencegroup
from . import googleaudiencegroup


@dataclass_json
@dataclass
class AudienceGroupAssignedTargetingOptionDetails:
    excluded_first_and_third_party_audience_group: Optional[firstandthirdpartyaudiencegroup.FirstAndThirdPartyAudienceGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedFirstAndThirdPartyAudienceGroup' }})
    excluded_google_audience_group: Optional[googleaudiencegroup.GoogleAudienceGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedGoogleAudienceGroup' }})
    included_combined_audience_group: Optional[combinedaudiencegroup.CombinedAudienceGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedCombinedAudienceGroup' }})
    included_custom_list_group: Optional[customlistgroup.CustomListGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedCustomListGroup' }})
    included_first_and_third_party_audience_groups: Optional[List[firstandthirdpartyaudiencegroup.FirstAndThirdPartyAudienceGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedFirstAndThirdPartyAudienceGroups' }})
    included_google_audience_group: Optional[googleaudiencegroup.GoogleAudienceGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedGoogleAudienceGroup' }})
    
