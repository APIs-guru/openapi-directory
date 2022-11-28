import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UrlAssignedTargetingOptionDetails
/** 
 * Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.
**/
export class UrlAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
