import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NiCallerIdentity } from "./nicalleridentity";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";

export enum NiResponseJsonStandardCallerTypeEnum {
    Business = "business"
,    Consumer = "consumer"
,    Unknown = "unknown"
}

export enum NiResponseJsonStandardCurrentCarrierNetworkTypeEnum {
    Mobile = "mobile"
,    Landline = "landline"
,    LandlinePremium = "landline_premium"
,    LandlineTollfree = "landline_tollfree"
,    Virtual = "virtual"
,    Unknown = "unknown"
,    Pager = "pager"
,    Null = "null"
}


export class NiResponseJsonStandardCurrentCarrier extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network_code" })
  networkCode?: string;

  @Metadata({ data: "json, name=network_type" })
  networkType?: NiResponseJsonStandardCurrentCarrierNetworkTypeEnum;
}

export enum NiResponseJsonStandardPortedEnum {
    Unknown = "unknown"
,    Ported = "ported"
,    NotPorted = "not_ported"
,    AssumedNotPorted = "assumed_not_ported"
,    AssumedPorted = "assumed_ported"
,    Null = "null"
}


// NiResponseJsonStandard
/** 
 * Standard Response
**/
export class NiResponseJsonStandard extends SpeakeasyBase {
  @Metadata({ data: "json, name=caller_identity" })
  callerIdentity?: NiCallerIdentity;

  @Metadata({ data: "json, name=caller_name" })
  callerName?: string;

  @Metadata({ data: "json, name=caller_type" })
  callerType?: NiResponseJsonStandardCallerTypeEnum;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=country_code_iso3" })
  countryCodeIso3?: string;

  @Metadata({ data: "json, name=country_name" })
  countryName?: string;

  @Metadata({ data: "json, name=country_prefix" })
  countryPrefix?: string;

  @Metadata({ data: "json, name=current_carrier" })
  currentCarrier?: NiResponseJsonStandardCurrentCarrier;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=international_format_number" })
  internationalFormatNumber?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=national_format_number" })
  nationalFormatNumber?: string;

  @Metadata({ data: "json, name=original_carrier" })
  originalCarrier?: NiInitialCarrierProperties;

  @Metadata({ data: "json, name=ported" })
  ported?: NiResponseJsonStandardPortedEnum;

  @Metadata({ data: "json, name=refund_price" })
  refundPrice?: string;

  @Metadata({ data: "json, name=remaining_balance" })
  remainingBalance?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=request_price" })
  requestPrice?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=status_message" })
  statusMessage?: string;
}
