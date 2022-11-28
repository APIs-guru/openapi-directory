import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpCookieEvidence
/** 
 * Evidence for HTTP cookie-related policy violations.
**/
export class HttpCookieEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookieNames" })
  cookieNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxCookieCount" })
  maxCookieCount?: number;
}
