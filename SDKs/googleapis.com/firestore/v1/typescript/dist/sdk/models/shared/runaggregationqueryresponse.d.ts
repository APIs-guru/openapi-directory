import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResult } from "./aggregationresult";
/**
 * The response for Firestore.RunAggregationQuery.
**/
export declare class RunAggregationQueryResponse extends SpeakeasyBase {
    readTime?: string;
    result?: AggregationResult;
    transaction?: string;
}
