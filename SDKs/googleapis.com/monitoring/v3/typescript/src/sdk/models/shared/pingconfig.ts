import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PingConfig
/** 
 * Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain.
**/
export class PingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pingsCount" })
  pingsCount?: number;
}
