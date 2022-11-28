import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsCacheConfig
/** 
 * Configuration for NodeLocal DNSCache
**/
export class DnsCacheConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
