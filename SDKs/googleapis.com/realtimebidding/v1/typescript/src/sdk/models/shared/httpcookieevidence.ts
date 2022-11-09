import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpCookieEvidence
/** 
 * Evidence for HTTP cookie-related policy violations.
**/
export class HttpCookieEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookieNames" })
  cookieNames?: string[];

  @Metadata({ data: "json, name=maxCookieCount" })
  maxCookieCount?: number;
}
