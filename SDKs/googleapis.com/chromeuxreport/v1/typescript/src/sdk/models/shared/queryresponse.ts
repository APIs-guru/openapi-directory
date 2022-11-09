import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Record } from "./record";
import { UrlNormalization } from "./urlnormalization";


// QueryResponse
/** 
 * Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
**/
export class QueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=record" })
  record?: Record;

  @Metadata({ data: "json, name=urlNormalizationDetails" })
  urlNormalizationDetails?: UrlNormalization;
}
