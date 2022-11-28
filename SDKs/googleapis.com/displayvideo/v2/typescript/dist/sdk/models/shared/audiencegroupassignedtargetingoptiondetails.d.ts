import { SpeakeasyBase } from "../../../internal/utils";
import { FirstAndThirdPartyAudienceGroup } from "./firstandthirdpartyaudiencegroup";
import { GoogleAudienceGroup } from "./googleaudiencegroup";
import { CombinedAudienceGroup } from "./combinedaudiencegroup";
import { CustomListGroup } from "./customlistgroup";
/**
 * Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
**/
export declare class AudienceGroupAssignedTargetingOptionDetails extends SpeakeasyBase {
    excludedFirstAndThirdPartyAudienceGroup?: FirstAndThirdPartyAudienceGroup;
    excludedGoogleAudienceGroup?: GoogleAudienceGroup;
    includedCombinedAudienceGroup?: CombinedAudienceGroup;
    includedCustomListGroup?: CustomListGroup;
    includedFirstAndThirdPartyAudienceGroups?: FirstAndThirdPartyAudienceGroup[];
    includedGoogleAudienceGroup?: GoogleAudienceGroup;
}
