import { SpeakeasyBase } from "../../../internal/utils";
import { EntityResult } from "./entityresult";
export declare enum QueryResultBatchEntityResultTypeEnum {
    ResultTypeUnspecified = "RESULT_TYPE_UNSPECIFIED",
    Full = "FULL",
    Projection = "PROJECTION",
    KeyOnly = "KEY_ONLY"
}
export declare enum QueryResultBatchMoreResultsEnum {
    MoreResultsTypeUnspecified = "MORE_RESULTS_TYPE_UNSPECIFIED",
    NotFinished = "NOT_FINISHED",
    MoreResultsAfterLimit = "MORE_RESULTS_AFTER_LIMIT",
    MoreResultsAfterCursor = "MORE_RESULTS_AFTER_CURSOR",
    NoMoreResults = "NO_MORE_RESULTS"
}
/**
 * A batch of results produced by a query.
**/
export declare class QueryResultBatch extends SpeakeasyBase {
    endCursor?: string;
    entityResultType?: QueryResultBatchEntityResultTypeEnum;
    entityResults?: EntityResult[];
    moreResults?: QueryResultBatchMoreResultsEnum;
    readTime?: string;
    skippedCursor?: string;
    skippedResults?: number;
    snapshotVersion?: string;
}
