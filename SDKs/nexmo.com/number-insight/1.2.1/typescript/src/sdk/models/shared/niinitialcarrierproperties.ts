import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NiInitialCarrierPropertiesNetworkTypeEnum {
    Mobile = "mobile",
    Landline = "landline",
    LandlinePremium = "landline_premium",
    LandlineTollfree = "landline_tollfree",
    Virtual = "virtual",
    Unknown = "unknown",
    Pager = "pager",
    Null = "null"
}


// NiInitialCarrierProperties
/** 
 * Information about the network `number` was initially connected to.
**/
export class NiInitialCarrierProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network_code" })
  networkCode?: string;

  @SpeakeasyMetadata({ data: "json, name=network_type" })
  networkType?: NiInitialCarrierPropertiesNetworkTypeEnum;
}
