import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpConfig
/** 
 * Defines IP configuration where this Certificate Map is serving.
**/
export class IpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: number[];
}
