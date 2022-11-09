import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstAndThirdPartyAudienceGroup } from "./firstandthirdpartyaudiencegroup";
import { GoogleAudienceGroup } from "./googleaudiencegroup";
import { CombinedAudienceGroup } from "./combinedaudiencegroup";
import { CustomListGroup } from "./customlistgroup";
import { FirstAndThirdPartyAudienceGroup } from "./firstandthirdpartyaudiencegroup";
import { GoogleAudienceGroup } from "./googleaudiencegroup";


// AudienceGroupAssignedTargetingOptionDetails
/** 
 * Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
**/
export class AudienceGroupAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedFirstAndThirdPartyAudienceGroup" })
  excludedFirstAndThirdPartyAudienceGroup?: FirstAndThirdPartyAudienceGroup;

  @Metadata({ data: "json, name=excludedGoogleAudienceGroup" })
  excludedGoogleAudienceGroup?: GoogleAudienceGroup;

  @Metadata({ data: "json, name=includedCombinedAudienceGroup" })
  includedCombinedAudienceGroup?: CombinedAudienceGroup;

  @Metadata({ data: "json, name=includedCustomListGroup" })
  includedCustomListGroup?: CustomListGroup;

  @Metadata({ data: "json, name=includedFirstAndThirdPartyAudienceGroups", elemType: shared.FirstAndThirdPartyAudienceGroup })
  includedFirstAndThirdPartyAudienceGroups?: FirstAndThirdPartyAudienceGroup[];

  @Metadata({ data: "json, name=includedGoogleAudienceGroup" })
  includedGoogleAudienceGroup?: GoogleAudienceGroup;
}
