import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NiInitialCarrierPropertiesNetworkTypeEnum {
    Mobile = "mobile"
,    Landline = "landline"
,    LandlinePremium = "landline_premium"
,    LandlineTollfree = "landline_tollfree"
,    Virtual = "virtual"
,    Unknown = "unknown"
,    Pager = "pager"
,    Null = "null"
}


// NiInitialCarrierProperties
/** 
 * Information about the network `number` was initially connected to.
**/
export class NiInitialCarrierProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network_code" })
  networkCode?: string;

  @Metadata({ data: "json, name=network_type" })
  networkType?: NiInitialCarrierPropertiesNetworkTypeEnum;
}
