import { SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";
import { UrlNormalization } from "./urlnormalization";
/**
 * Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
**/
export declare class QueryResponse extends SpeakeasyBase {
    record?: Record;
    urlNormalizationDetails?: UrlNormalization;
}
