import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WakeOnLanInfo
/** 
 * Provides the MAC address and port for wake-on-LAN functionality.
**/
export class WakeOnLanInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=MacAddress" })
  macAddress?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;
}
