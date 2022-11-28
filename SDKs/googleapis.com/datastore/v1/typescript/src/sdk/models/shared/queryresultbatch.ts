import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityResult } from "./entityresult";


export enum QueryResultBatchEntityResultTypeEnum {
    ResultTypeUnspecified = "RESULT_TYPE_UNSPECIFIED",
    Full = "FULL",
    Projection = "PROJECTION",
    KeyOnly = "KEY_ONLY"
}

export enum QueryResultBatchMoreResultsEnum {
    MoreResultsTypeUnspecified = "MORE_RESULTS_TYPE_UNSPECIFIED",
    NotFinished = "NOT_FINISHED",
    MoreResultsAfterLimit = "MORE_RESULTS_AFTER_LIMIT",
    MoreResultsAfterCursor = "MORE_RESULTS_AFTER_CURSOR",
    NoMoreResults = "NO_MORE_RESULTS"
}


// QueryResultBatch
/** 
 * A batch of results produced by a query.
**/
export class QueryResultBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endCursor" })
  endCursor?: string;

  @SpeakeasyMetadata({ data: "json, name=entityResultType" })
  entityResultType?: QueryResultBatchEntityResultTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=entityResults", elemType: EntityResult })
  entityResults?: EntityResult[];

  @SpeakeasyMetadata({ data: "json, name=moreResults" })
  moreResults?: QueryResultBatchMoreResultsEnum;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=skippedCursor" })
  skippedCursor?: string;

  @SpeakeasyMetadata({ data: "json, name=skippedResults" })
  skippedResults?: number;

  @SpeakeasyMetadata({ data: "json, name=snapshotVersion" })
  snapshotVersion?: string;
}
