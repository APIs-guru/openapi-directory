import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NiCallerIdentity } from "./nicalleridentity";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
export declare enum NiResponseJsonStandardCallerTypeEnum {
    Business = "business",
    Consumer = "consumer",
    Unknown = "unknown"
}
export declare enum NiResponseJsonStandardCurrentCarrierNetworkTypeEnum {
    Mobile = "mobile",
    Landline = "landline",
    LandlinePremium = "landline_premium",
    LandlineTollfree = "landline_tollfree",
    Virtual = "virtual",
    Unknown = "unknown",
    Pager = "pager",
    Null = "null"
}
export declare class NiResponseJsonStandardCurrentCarrier extends SpeakeasyBase {
    country?: string;
    name?: string;
    networkCode?: string;
    networkType?: NiResponseJsonStandardCurrentCarrierNetworkTypeEnum;
}
export declare enum NiResponseJsonStandardPortedEnum {
    Unknown = "unknown",
    Ported = "ported",
    NotPorted = "not_ported",
    AssumedNotPorted = "assumed_not_ported",
    AssumedPorted = "assumed_ported",
    Null = "null"
}
/**
 * Standard Response
**/
export declare class NiResponseJsonStandard extends SpeakeasyBase {
    callerIdentity?: NiCallerIdentity;
    callerName?: string;
    callerType?: NiResponseJsonStandardCallerTypeEnum;
    countryCode?: string;
    countryCodeIso3?: string;
    countryName?: string;
    countryPrefix?: string;
    currentCarrier?: NiResponseJsonStandardCurrentCarrier;
    firstName?: string;
    internationalFormatNumber?: string;
    lastName?: string;
    nationalFormatNumber?: string;
    originalCarrier?: NiInitialCarrierProperties;
    ported?: NiResponseJsonStandardPortedEnum;
    refundPrice?: string;
    remainingBalance?: string;
    requestId?: string;
    requestPrice?: string;
    status?: number;
    statusMessage?: string;
}
