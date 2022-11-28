from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AudienceGroupAssignedTargetingOptionDetails:
    r"""AudienceGroupAssignedTargetingOptionDetails
    Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
    """
    
    excluded_first_and_third_party_audience_group: Optional[FirstAndThirdPartyAudienceGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedFirstAndThirdPartyAudienceGroup') }})
    excluded_google_audience_group: Optional[GoogleAudienceGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedGoogleAudienceGroup') }})
    included_combined_audience_group: Optional[CombinedAudienceGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedCombinedAudienceGroup') }})
    included_custom_list_group: Optional[CustomListGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedCustomListGroup') }})
    included_first_and_third_party_audience_groups: Optional[List[FirstAndThirdPartyAudienceGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedFirstAndThirdPartyAudienceGroups') }})
    included_google_audience_group: Optional[GoogleAudienceGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedGoogleAudienceGroup') }})
    
