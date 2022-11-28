import { SpeakeasyBase } from "../../../internal/utils";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
export declare enum NiResponseXmlStandardCallerIdentityCallerTypeEnum {
    Business = "business",
    Consumer = "consumer",
    Unknown = "unknown"
}
/**
 * Contains details of the number owner, if `cnam` was set to `true` in the request.
**/
export declare class NiResponseXmlStandardCallerIdentity extends SpeakeasyBase {
    callerName?: string;
    callerType?: NiResponseXmlStandardCallerIdentityCallerTypeEnum;
    callerName1?: string;
    callerType1?: NiResponseXmlStandardCallerIdentityCallerTypeEnum;
    firsName?: string;
    firstName?: string;
    lastName?: string;
    lastName1?: string;
}
export declare enum NiResponseXmlStandardCurrentCarrierNetworkTypeEnum {
    Mobile = "mobile",
    Landline = "landline",
    LandlinePremium = "landline_premium",
    LandlineTollfree = "landline_tollfree",
    Virtual = "virtual",
    Unknown = "unknown",
    Pager = "pager",
    Null = "null"
}
export declare class NiResponseXmlStandardCurrentCarrier extends SpeakeasyBase {
    country?: string;
    name?: string;
    networkCode?: string;
    networkType?: NiResponseXmlStandardCurrentCarrierNetworkTypeEnum;
}
/**
 * The error code and status of your request
**/
export declare class NiResponseXmlStandardError extends SpeakeasyBase {
    code?: string;
    statusText?: string;
}
/**
 * An object containing the `number` in your request in the format used by the country the number belongs to.
**/
export declare class NiResponseXmlStandardLocalNumber extends SpeakeasyBase {
    countryCode?: string;
    countryCodeIso3?: string;
    countryName?: string;
    countryPrefix?: string;
    number?: string;
}
/**
 * Standard
**/
export declare class NiResponseXmlStandard extends SpeakeasyBase {
    callerIdentity?: NiResponseXmlStandardCallerIdentity;
    currentCarrier?: NiResponseXmlStandardCurrentCarrier;
    error?: NiResponseXmlStandardError;
    internationalFormatNumber?: string;
    localNumber?: NiResponseXmlStandardLocalNumber;
    originalCarrier?: NiInitialCarrierProperties;
    ported?: any;
    remainingBalance?: string;
    requestId?: string;
    requestPrice?: string;
}
