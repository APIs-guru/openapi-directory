import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxRetryCacheEntry
/** 
 * Keeps the number of calls without x-fapi-customer-ip-address header present
**/
export class SandboxRetryCacheEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheKey" })
  cacheKey?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=expirationTimestamp" })
  expirationTimestamp?: Date;
}
