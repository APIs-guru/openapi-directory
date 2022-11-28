import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WakeOnLanInfo
/** 
 * Provides the MAC address and port for wake-on-LAN functionality.
**/
export class WakeOnLanInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MacAddress" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;
}
