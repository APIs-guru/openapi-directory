import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ThirdPartyVendorConfigVendorEnum {
    ThirdPartyVendorUnspecified = "THIRD_PARTY_VENDOR_UNSPECIFIED",
    ThirdPartyVendorMoat = "THIRD_PARTY_VENDOR_MOAT",
    ThirdPartyVendorDoubleVerify = "THIRD_PARTY_VENDOR_DOUBLE_VERIFY",
    ThirdPartyVendorIntegralAdScience = "THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE",
    ThirdPartyVendorComscore = "THIRD_PARTY_VENDOR_COMSCORE",
    ThirdPartyVendorTelemetry = "THIRD_PARTY_VENDOR_TELEMETRY",
    ThirdPartyVendorMeetrics = "THIRD_PARTY_VENDOR_MEETRICS",
    ThirdPartyVendorZefr = "THIRD_PARTY_VENDOR_ZEFR",
    ThirdPartyVendorNielsen = "THIRD_PARTY_VENDOR_NIELSEN",
    ThirdPartyVendorKantar = "THIRD_PARTY_VENDOR_KANTAR",
    ThirdPartyVendorDynata = "THIRD_PARTY_VENDOR_DYNATA"
}
/**
 * Settings that control how third-party measurement vendors are configured.
**/
export declare class ThirdPartyVendorConfig extends SpeakeasyBase {
    placementId?: string;
    vendor?: ThirdPartyVendorConfigVendorEnum;
}
