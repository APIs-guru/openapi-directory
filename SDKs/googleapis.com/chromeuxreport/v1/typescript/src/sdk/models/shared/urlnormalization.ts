import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UrlNormalization
/** 
 * Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.
**/
export class UrlNormalization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=normalizedUrl" })
  normalizedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=originalUrl" })
  originalUrl?: string;
}
