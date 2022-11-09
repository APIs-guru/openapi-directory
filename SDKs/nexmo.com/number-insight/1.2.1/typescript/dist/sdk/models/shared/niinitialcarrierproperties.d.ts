import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum NiInitialCarrierPropertiesNetworkTypeEnum {
    Mobile = "mobile",
    Landline = "landline",
    LandlinePremium = "landline_premium",
    LandlineTollfree = "landline_tollfree",
    Virtual = "virtual",
    Unknown = "unknown",
    Pager = "pager",
    Null = "null"
}
/**
 * Information about the network `number` was initially connected to.
**/
export declare class NiInitialCarrierProperties extends SpeakeasyBase {
    country?: string;
    name?: string;
    networkCode?: string;
    networkType?: NiInitialCarrierPropertiesNetworkTypeEnum;
}
