import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationResult } from "./aggregationresult";


export enum AggregationResultBatchMoreResultsEnum {
    MoreResultsTypeUnspecified = "MORE_RESULTS_TYPE_UNSPECIFIED",
    NotFinished = "NOT_FINISHED",
    MoreResultsAfterLimit = "MORE_RESULTS_AFTER_LIMIT",
    MoreResultsAfterCursor = "MORE_RESULTS_AFTER_CURSOR",
    NoMoreResults = "NO_MORE_RESULTS"
}


// AggregationResultBatch
/** 
 * A batch of aggregation results produced by an aggregation query.
**/
export class AggregationResultBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationResults", elemType: AggregationResult })
  aggregationResults?: AggregationResult[];

  @SpeakeasyMetadata({ data: "json, name=moreResults" })
  moreResults?: AggregationResultBatchMoreResultsEnum;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;
}
