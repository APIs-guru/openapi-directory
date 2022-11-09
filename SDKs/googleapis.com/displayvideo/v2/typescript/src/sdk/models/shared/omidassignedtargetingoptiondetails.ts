import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OmidAssignedTargetingOptionDetailsOmidEnum {
    OmidUnspecified = "OMID_UNSPECIFIED"
,    OmidForMobileDisplayAds = "OMID_FOR_MOBILE_DISPLAY_ADS"
}


// OmidAssignedTargetingOptionDetails
/** 
 * Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.
**/
export class OmidAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=omid" })
  omid?: OmidAssignedTargetingOptionDetailsOmidEnum;
}
