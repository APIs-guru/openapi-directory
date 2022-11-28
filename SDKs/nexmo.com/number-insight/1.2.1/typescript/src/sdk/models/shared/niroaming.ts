import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NiRoamingStatusEnum {
    Roaming = "roaming",
    NotRoaming = "not_roaming"
}


// NiRoaming
/** 
 * Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.
**/
export class NiRoaming extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roaming_country_code" })
  roamingCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=roaming_network_code" })
  roamingNetworkCode?: string;

  @SpeakeasyMetadata({ data: "json, name=roaming_network_name" })
  roamingNetworkName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: NiRoamingStatusEnum;
}
