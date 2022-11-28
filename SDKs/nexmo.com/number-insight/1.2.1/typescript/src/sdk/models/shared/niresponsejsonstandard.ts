import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NiCallerIdentity } from "./nicalleridentity";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";


export enum NiResponseJsonStandardCallerTypeEnum {
    Business = "business",
    Consumer = "consumer",
    Unknown = "unknown"
}

export enum NiResponseJsonStandardCurrentCarrierNetworkTypeEnum {
    Mobile = "mobile",
    Landline = "landline",
    LandlinePremium = "landline_premium",
    LandlineTollfree = "landline_tollfree",
    Virtual = "virtual",
    Unknown = "unknown",
    Pager = "pager",
    Null = "null"
}


export class NiResponseJsonStandardCurrentCarrier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network_code" })
  networkCode?: string;

  @SpeakeasyMetadata({ data: "json, name=network_type" })
  networkType?: NiResponseJsonStandardCurrentCarrierNetworkTypeEnum;
}

export enum NiResponseJsonStandardPortedEnum {
    Unknown = "unknown",
    Ported = "ported",
    NotPorted = "not_ported",
    AssumedNotPorted = "assumed_not_ported",
    AssumedPorted = "assumed_ported",
    Null = "null"
}


// NiResponseJsonStandard
/** 
 * Standard Response
**/
export class NiResponseJsonStandard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caller_identity" })
  callerIdentity?: NiCallerIdentity;

  @SpeakeasyMetadata({ data: "json, name=caller_name" })
  callerName?: string;

  @SpeakeasyMetadata({ data: "json, name=caller_type" })
  callerType?: NiResponseJsonStandardCallerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code_iso3" })
  countryCodeIso3?: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=country_prefix" })
  countryPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=current_carrier" })
  currentCarrier?: NiResponseJsonStandardCurrentCarrier;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=international_format_number" })
  internationalFormatNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=national_format_number" })
  nationalFormatNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=original_carrier" })
  originalCarrier?: NiInitialCarrierProperties;

  @SpeakeasyMetadata({ data: "json, name=ported" })
  ported?: NiResponseJsonStandardPortedEnum;

  @SpeakeasyMetadata({ data: "json, name=refund_price" })
  refundPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=remaining_balance" })
  remainingBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_price" })
  requestPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=status_message" })
  statusMessage?: string;
}
