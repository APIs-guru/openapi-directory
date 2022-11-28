import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OmidTargetingOptionDetailsOmidEnum {
    OmidUnspecified = "OMID_UNSPECIFIED",
    OmidForMobileDisplayAds = "OMID_FOR_MOBILE_DISPLAY_ADS"
}


// OmidTargetingOptionDetails
/** 
 * Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`.
**/
export class OmidTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=omid" })
  omid?: OmidTargetingOptionDetailsOmidEnum;
}
