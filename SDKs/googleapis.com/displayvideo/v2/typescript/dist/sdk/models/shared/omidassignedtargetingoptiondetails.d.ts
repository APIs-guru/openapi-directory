import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OmidAssignedTargetingOptionDetailsOmidEnum {
    OmidUnspecified = "OMID_UNSPECIFIED",
    OmidForMobileDisplayAds = "OMID_FOR_MOBILE_DISPLAY_ADS"
}
/**
 * Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.
**/
export declare class OmidAssignedTargetingOptionDetails extends SpeakeasyBase {
    omid?: OmidAssignedTargetingOptionDetailsOmidEnum;
}
