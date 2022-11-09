import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpConfig
/** 
 * Defines IP configuration where this Certificate Map is serving.
**/
export class IpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=ports" })
  ports?: number[];
}
