import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpHeaderMatch
/** 
 * Specification of HTTP header match attributes.
**/
export class HttpHeaderMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headerName" })
  headerName?: string;

  @SpeakeasyMetadata({ data: "json, name=regexMatch" })
  regexMatch?: string;
}
