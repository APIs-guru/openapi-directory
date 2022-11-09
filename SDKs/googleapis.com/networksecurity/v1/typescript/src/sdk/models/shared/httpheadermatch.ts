import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpHeaderMatch
/** 
 * Specification of HTTP header match attributes.
**/
export class HttpHeaderMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=headerName" })
  headerName?: string;

  @Metadata({ data: "json, name=regexMatch" })
  regexMatch?: string;
}
