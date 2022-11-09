import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxRetryCacheEntry
/** 
 * Keeps the number of calls without x-fapi-customer-ip-address header present
**/
export class SandboxRetryCacheEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheKey" })
  cacheKey?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=expirationTimestamp" })
  expirationTimestamp?: Date;
}
