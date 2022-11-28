import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NiRoamingStatusEnum {
    Roaming = "roaming",
    NotRoaming = "not_roaming"
}
/**
 * Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.
**/
export declare class NiRoaming extends SpeakeasyBase {
    roamingCountryCode?: string;
    roamingNetworkCode?: string;
    roamingNetworkName?: string;
    status?: NiRoamingStatusEnum;
}
