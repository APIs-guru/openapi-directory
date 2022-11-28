import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResult } from "./aggregationresult";
export declare enum AggregationResultBatchMoreResultsEnum {
    MoreResultsTypeUnspecified = "MORE_RESULTS_TYPE_UNSPECIFIED",
    NotFinished = "NOT_FINISHED",
    MoreResultsAfterLimit = "MORE_RESULTS_AFTER_LIMIT",
    MoreResultsAfterCursor = "MORE_RESULTS_AFTER_CURSOR",
    NoMoreResults = "NO_MORE_RESULTS"
}
/**
 * A batch of aggregation results produced by an aggregation query.
**/
export declare class AggregationResultBatch extends SpeakeasyBase {
    aggregationResults?: AggregationResult[];
    moreResults?: AggregationResultBatchMoreResultsEnum;
    readTime?: string;
}
