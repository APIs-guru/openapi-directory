import { SpeakeasyBase } from "../../../internal/utils";
import { NiCurrentCarrierProperties } from "./nicurrentcarrierproperties";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
import { NiRoaming } from "./niroaming";
export declare enum NiResponseXmlAdvancedCallerTypeEnum {
    Business = "business",
    Consumer = "consumer",
    Unknown = "unknown"
}
/**
 * The error code and status of your request
**/
export declare class NiResponseXmlAdvancedError extends SpeakeasyBase {
    code?: string;
    statusText?: string;
}
/**
 * An object containing the `number` in your request in the format used by the country the number belongs to.
**/
export declare class NiResponseXmlAdvancedLocalNumber extends SpeakeasyBase {
    countryCode?: string;
    countryCodeIso3?: string;
    countryName?: string;
    countryPrefix?: string;
    number?: string;
}
/**
 * An object indicating whether all information about a phone number has been returned.
**/
export declare class NiResponseXmlAdvancedLookupOutcome extends SpeakeasyBase {
    code?: any;
    lookupOutcomeMessage?: string;
}
export declare enum NiResponseXmlAdvancedReachableEnum {
    Unknown = "unknown",
    Reachable = "reachable",
    Undeliverable = "undeliverable",
    Absent = "absent",
    BadNumber = "bad_number",
    Blacklisted = "blacklisted",
    Null = "null"
}
export declare enum NiResponseXmlAdvancedValidNumberEnum {
    Unknown = "unknown",
    Valid = "valid",
    NotValid = "not_valid",
    InferredNotValid = "inferred_not_valid"
}
/**
 * Advanced
**/
export declare class NiResponseXmlAdvanced extends SpeakeasyBase {
    callerIdentity?: any;
    callerName?: string;
    callerType?: NiResponseXmlAdvancedCallerTypeEnum;
    currentCarrier?: NiCurrentCarrierProperties;
    error?: NiResponseXmlAdvancedError;
    firsName?: string;
    internationalFormatNumber?: string;
    ipWarnings?: string;
    lastName?: string;
    localNumber?: NiResponseXmlAdvancedLocalNumber;
    lookupOutcome?: NiResponseXmlAdvancedLookupOutcome;
    originalCarrier?: NiInitialCarrierProperties;
    ported?: any;
    reachable?: NiResponseXmlAdvancedReachableEnum;
    remainingBalance?: string;
    requestId?: string;
    requestPrice?: string;
    roaming?: NiRoaming;
    validNumber?: NiResponseXmlAdvancedValidNumberEnum;
}
