import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NiCallerIdentity } from "./nicalleridentity";
import { NiCurrentCarrierProperties } from "./nicurrentcarrierproperties";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
import { NiRealtimeData } from "./nirealtimedata";
import { NiRoaming } from "./niroaming";
export declare enum NiResponseJsonAdvancedSyncPortedEnum {
    Unknown = "unknown",
    Ported = "ported",
    NotPorted = "not_ported",
    AssumedNotPorted = "assumed_not_ported",
    AssumedPorted = "assumed_ported",
    Null = "null"
}
export declare enum NiResponseJsonAdvancedSyncReachableEnum {
    Unknown = "unknown",
    Reachable = "reachable",
    Undeliverable = "undeliverable",
    Absent = "absent",
    BadNumber = "bad_number",
    Blacklisted = "blacklisted",
    Null = "null"
}
export declare enum NiResponseJsonAdvancedSyncValidNumberEnum {
    Unknown = "unknown",
    Valid = "valid",
    NotValid = "not_valid",
    Inferred = "inferred",
    InferredNotValid = "inferred_not_valid"
}
/**
 * Advanced Response (sync)
**/
export declare class NiResponseJsonAdvancedSync extends SpeakeasyBase {
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
    ported?: NiResponseJsonAdvancedSyncPortedEnum;
    reachable?: NiResponseJsonAdvancedSyncReachableEnum;
    realTimeData?: NiRealtimeData;
    refundPrice?: string;
    remainingBalance?: string;
    requestId: string;
    requestPrice?: string;
    roaming?: NiRoaming;
    status: number;
    statusMessage: string;
    validNumber?: NiResponseJsonAdvancedSyncValidNumberEnum;
}
