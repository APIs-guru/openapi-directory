import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PingConfig
/** 
 * Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain.
**/
export class PingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pingsCount" })
  pingsCount?: number;
}
