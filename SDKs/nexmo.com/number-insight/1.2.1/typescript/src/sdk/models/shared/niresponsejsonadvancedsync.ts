import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NiCallerIdentity } from "./nicalleridentity";
import { NiCurrentCarrierProperties } from "./nicurrentcarrierproperties";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
import { NiRealtimeData } from "./nirealtimedata";
import { NiRoaming } from "./niroaming";


export enum NiResponseJsonAdvancedSyncPortedEnum {
    Unknown = "unknown",
    Ported = "ported",
    NotPorted = "not_ported",
    AssumedNotPorted = "assumed_not_ported",
    AssumedPorted = "assumed_ported",
    Null = "null"
}

export enum NiResponseJsonAdvancedSyncReachableEnum {
    Unknown = "unknown",
    Reachable = "reachable",
    Undeliverable = "undeliverable",
    Absent = "absent",
    BadNumber = "bad_number",
    Blacklisted = "blacklisted",
    Null = "null"
}

export enum NiResponseJsonAdvancedSyncValidNumberEnum {
    Unknown = "unknown",
    Valid = "valid",
    NotValid = "not_valid",
    Inferred = "inferred",
    InferredNotValid = "inferred_not_valid"
}


// NiResponseJsonAdvancedSync
/** 
 * Advanced Response (sync)
**/
export class NiResponseJsonAdvancedSync extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caller_identity" })
  callerIdentity?: NiCallerIdentity;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=country_code_iso3" })
  countryCodeIso3: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName: string;

  @SpeakeasyMetadata({ data: "json, name=country_prefix" })
  countryPrefix: string;

  @SpeakeasyMetadata({ data: "json, name=current_carrier" })
  currentCarrier?: NiCurrentCarrierProperties;

  @SpeakeasyMetadata({ data: "json, name=international_format_number" })
  internationalFormatNumber: string;

  @SpeakeasyMetadata({ data: "json, name=lookup_outcome" })
  lookupOutcome?: number;

  @SpeakeasyMetadata({ data: "json, name=lookup_outcome_message" })
  lookupOutcomeMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=national_format_number" })
  nationalFormatNumber: string;

  @SpeakeasyMetadata({ data: "json, name=original_carrier" })
  originalCarrier?: NiInitialCarrierProperties;

  @SpeakeasyMetadata({ data: "json, name=ported" })
  ported?: NiResponseJsonAdvancedSyncPortedEnum;

  @SpeakeasyMetadata({ data: "json, name=reachable" })
  reachable?: NiResponseJsonAdvancedSyncReachableEnum;

  @SpeakeasyMetadata({ data: "json, name=real_time_data" })
  realTimeData?: NiRealtimeData;

  @SpeakeasyMetadata({ data: "json, name=refund_price" })
  refundPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=remaining_balance" })
  remainingBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=request_price" })
  requestPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=roaming" })
  roaming?: NiRoaming;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=status_message" })
  statusMessage: string;

  @SpeakeasyMetadata({ data: "json, name=valid_number" })
  validNumber?: NiResponseJsonAdvancedSyncValidNumberEnum;
}
