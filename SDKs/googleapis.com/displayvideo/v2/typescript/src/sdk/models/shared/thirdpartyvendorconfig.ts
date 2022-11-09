import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ThirdPartyVendorConfigVendorEnum {
    ThirdPartyVendorUnspecified = "THIRD_PARTY_VENDOR_UNSPECIFIED"
,    ThirdPartyVendorMoat = "THIRD_PARTY_VENDOR_MOAT"
,    ThirdPartyVendorDoubleVerify = "THIRD_PARTY_VENDOR_DOUBLE_VERIFY"
,    ThirdPartyVendorIntegralAdScience = "THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE"
,    ThirdPartyVendorComscore = "THIRD_PARTY_VENDOR_COMSCORE"
,    ThirdPartyVendorTelemetry = "THIRD_PARTY_VENDOR_TELEMETRY"
,    ThirdPartyVendorMeetrics = "THIRD_PARTY_VENDOR_MEETRICS"
,    ThirdPartyVendorZefr = "THIRD_PARTY_VENDOR_ZEFR"
,    ThirdPartyVendorNielsen = "THIRD_PARTY_VENDOR_NIELSEN"
,    ThirdPartyVendorKantar = "THIRD_PARTY_VENDOR_KANTAR"
,    ThirdPartyVendorDynata = "THIRD_PARTY_VENDOR_DYNATA"
}


// ThirdPartyVendorConfig
/** 
 * Settings that control how third-party measurement vendors are configured.
**/
export class ThirdPartyVendorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=placementId" })
  placementId?: string;

  @Metadata({ data: "json, name=vendor" })
  vendor?: ThirdPartyVendorConfigVendorEnum;
}
