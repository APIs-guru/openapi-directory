import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NiCallerIdentity } from "./nicalleridentity";
import { NiCurrentCarrierProperties } from "./nicurrentcarrierproperties";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
export declare enum NiResponseJsonAdvancedRoamingUnknownPortedEnum {
    Unknown = "unknown",
    Ported = "ported",
    NotPorted = "not_ported",
    AssumedNotPorted = "assumed_not_ported",
    AssumedPorted = "assumed_ported",
    Null = "null"
}
export declare enum NiResponseJsonAdvancedRoamingUnknownReachableEnum {
    Unknown = "unknown",
    Reachable = "reachable",
    Undeliverable = "undeliverable",
    Absent = "absent",
    BadNumber = "bad_number",
    Blacklisted = "blacklisted",
    Null = "null"
}
export declare enum NiResponseJsonAdvancedRoamingUnknownRoamingEnum {
    Unknown = "unknown"
}
export declare enum NiResponseJsonAdvancedRoamingUnknownValidNumberEnum {
    Unknown = "unknown",
    Valid = "valid",
    NotValid = "not_valid",
    Inferred = "inferred",
    InferredNotValid = "inferred_not_valid"
}
/**
 * Unknown Roaming
**/
export declare class NiResponseJsonAdvancedRoamingUnknown extends SpeakeasyBase {
    callerIdentity?: NiCallerIdentity;
    countryCode: string;
    countryCodeIso3: string;
    countryName: string;
    countryPrefix: string;
    currentCarrier?: NiCurrentCarrierProperties;
    internationalFormatNumber: string;
    lookupOutcome?: number;
    lookupOutcomeMessage?: string;
    nationalFormatNumber: string;
    originalCarrier?: NiInitialCarrierProperties;
    ported?: NiResponseJsonAdvancedRoamingUnknownPortedEnum;
    reachable?: NiResponseJsonAdvancedRoamingUnknownReachableEnum;
    refundPrice?: string;
    remainingBalance?: string;
    requestId: string;
    requestPrice?: string;
    roaming?: NiResponseJsonAdvancedRoamingUnknownRoamingEnum;
    status: number;
    statusMessage: string;
    validNumber?: NiResponseJsonAdvancedRoamingUnknownValidNumberEnum;
}
