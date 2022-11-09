import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityResult } from "./entityresult";

export enum QueryResultBatchEntityResultTypeEnum {
    ResultTypeUnspecified = "RESULT_TYPE_UNSPECIFIED"
,    Full = "FULL"
,    Projection = "PROJECTION"
,    KeyOnly = "KEY_ONLY"
}

export enum QueryResultBatchMoreResultsEnum {
    MoreResultsTypeUnspecified = "MORE_RESULTS_TYPE_UNSPECIFIED"
,    NotFinished = "NOT_FINISHED"
,    MoreResultsAfterLimit = "MORE_RESULTS_AFTER_LIMIT"
,    MoreResultsAfterCursor = "MORE_RESULTS_AFTER_CURSOR"
,    NoMoreResults = "NO_MORE_RESULTS"
}


// QueryResultBatch
/** 
 * A batch of results produced by a query.
**/
export class QueryResultBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=endCursor" })
  endCursor?: string;

  @Metadata({ data: "json, name=entityResultType" })
  entityResultType?: QueryResultBatchEntityResultTypeEnum;

  @Metadata({ data: "json, name=entityResults", elemType: shared.EntityResult })
  entityResults?: EntityResult[];

  @Metadata({ data: "json, name=moreResults" })
  moreResults?: QueryResultBatchMoreResultsEnum;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=skippedCursor" })
  skippedCursor?: string;

  @Metadata({ data: "json, name=skippedResults" })
  skippedResults?: number;

  @Metadata({ data: "json, name=snapshotVersion" })
  snapshotVersion?: string;
}
