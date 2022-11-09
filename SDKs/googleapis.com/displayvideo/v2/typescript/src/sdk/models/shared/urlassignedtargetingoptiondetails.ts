import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UrlAssignedTargetingOptionDetails
/** 
 * Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.
**/
export class UrlAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=negative" })
  negative?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
