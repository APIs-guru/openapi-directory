import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UniversalAdIdRegistryEnum {
    Other = "OTHER",
    AdIdOrg = "AD_ID.ORG",
    Clearcast = "CLEARCAST",
    Dcm = "DCM"
}
/**
 * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
**/
export declare class UniversalAdId extends SpeakeasyBase {
    registry?: UniversalAdIdRegistryEnum;
    value?: string;
}
