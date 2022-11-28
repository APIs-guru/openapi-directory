import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpCacheControlResponseHeader
/** 
 * RFC-2616: cache control support
**/
export class HttpCacheControlResponseHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=age" })
  age?: string;

  @SpeakeasyMetadata({ data: "json, name=directive" })
  directive?: string;

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: string;
}
