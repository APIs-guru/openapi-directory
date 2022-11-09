import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NiRoamingStatusEnum {
    Roaming = "roaming"
,    NotRoaming = "not_roaming"
}


// NiRoaming
/** 
 * Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.
**/
export class NiRoaming extends SpeakeasyBase {
  @Metadata({ data: "json, name=roaming_country_code" })
  roamingCountryCode?: string;

  @Metadata({ data: "json, name=roaming_network_code" })
  roamingNetworkCode?: string;

  @Metadata({ data: "json, name=roaming_network_name" })
  roamingNetworkName?: string;

  @Metadata({ data: "json, name=status" })
  status?: NiRoamingStatusEnum;
}
