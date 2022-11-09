import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NiCallerIdentity } from "./nicalleridentity";
import { NiCurrentCarrierProperties } from "./nicurrentcarrierproperties";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";

export enum NiResponseJsonAdvancedRoamingUnknownPortedEnum {
    Unknown = "unknown"
,    Ported = "ported"
,    NotPorted = "not_ported"
,    AssumedNotPorted = "assumed_not_ported"
,    AssumedPorted = "assumed_ported"
,    Null = "null"
}

export enum NiResponseJsonAdvancedRoamingUnknownReachableEnum {
    Unknown = "unknown"
,    Reachable = "reachable"
,    Undeliverable = "undeliverable"
,    Absent = "absent"
,    BadNumber = "bad_number"
,    Blacklisted = "blacklisted"
,    Null = "null"
}

export enum NiResponseJsonAdvancedRoamingUnknownRoamingEnum {
    Unknown = "unknown"
}

export enum NiResponseJsonAdvancedRoamingUnknownValidNumberEnum {
    Unknown = "unknown"
,    Valid = "valid"
,    NotValid = "not_valid"
,    Inferred = "inferred"
,    InferredNotValid = "inferred_not_valid"
}


// NiResponseJsonAdvancedRoamingUnknown
/** 
 * Unknown Roaming
**/
export class NiResponseJsonAdvancedRoamingUnknown extends SpeakeasyBase {
  @Metadata({ data: "json, name=caller_identity" })
  callerIdentity?: NiCallerIdentity;

  @Metadata({ data: "json, name=country_code" })
  countryCode: string;

  @Metadata({ data: "json, name=country_code_iso3" })
  countryCodeIso3: string;

  @Metadata({ data: "json, name=country_name" })
  countryName: string;

  @Metadata({ data: "json, name=country_prefix" })
  countryPrefix: string;

  @Metadata({ data: "json, name=current_carrier" })
  currentCarrier?: NiCurrentCarrierProperties;

  @Metadata({ data: "json, name=international_format_number" })
  internationalFormatNumber: string;

  @Metadata({ data: "json, name=lookup_outcome" })
  lookupOutcome?: number;

  @Metadata({ data: "json, name=lookup_outcome_message" })
  lookupOutcomeMessage?: string;

  @Metadata({ data: "json, name=national_format_number" })
  nationalFormatNumber: string;

  @Metadata({ data: "json, name=original_carrier" })
  originalCarrier?: NiInitialCarrierProperties;

  @Metadata({ data: "json, name=ported" })
  ported?: NiResponseJsonAdvancedRoamingUnknownPortedEnum;

  @Metadata({ data: "json, name=reachable" })
  reachable?: NiResponseJsonAdvancedRoamingUnknownReachableEnum;

  @Metadata({ data: "json, name=refund_price" })
  refundPrice?: string;

  @Metadata({ data: "json, name=remaining_balance" })
  remainingBalance?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId: string;

  @Metadata({ data: "json, name=request_price" })
  requestPrice?: string;

  @Metadata({ data: "json, name=roaming" })
  roaming?: NiResponseJsonAdvancedRoamingUnknownRoamingEnum;

  @Metadata({ data: "json, name=status" })
  status: number;

  @Metadata({ data: "json, name=status_message" })
  statusMessage: string;

  @Metadata({ data: "json, name=valid_number" })
  validNumber?: NiResponseJsonAdvancedRoamingUnknownValidNumberEnum;
}
