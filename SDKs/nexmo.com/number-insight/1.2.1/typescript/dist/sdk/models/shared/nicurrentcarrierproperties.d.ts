import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NiCurrentCarrierPropertiesNetworkTypeEnum {
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
 * Information about the network `number` is currently connected to.
**/
export declare class NiCurrentCarrierProperties extends SpeakeasyBase {
    country?: string;
    name?: string;
    networkCode?: string;
    networkType?: NiCurrentCarrierPropertiesNetworkTypeEnum;
}
