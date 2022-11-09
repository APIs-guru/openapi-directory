import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpCacheControlResponseHeader
/** 
 * RFC-2616: cache control support
**/
export class HttpCacheControlResponseHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=age" })
  age?: string;

  @Metadata({ data: "json, name=directive" })
  directive?: string;

  @Metadata({ data: "json, name=expires" })
  expires?: string;
}
