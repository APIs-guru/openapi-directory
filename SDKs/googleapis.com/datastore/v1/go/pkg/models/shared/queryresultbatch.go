package shared

type QueryResultBatchEntityResultTypeEnum string

const (
	QueryResultBatchEntityResultTypeEnumResultTypeUnspecified QueryResultBatchEntityResultTypeEnum = "RESULT_TYPE_UNSPECIFIED"
	QueryResultBatchEntityResultTypeEnumFull                  QueryResultBatchEntityResultTypeEnum = "FULL"
	QueryResultBatchEntityResultTypeEnumProjection            QueryResultBatchEntityResultTypeEnum = "PROJECTION"
	QueryResultBatchEntityResultTypeEnumKeyOnly               QueryResultBatchEntityResultTypeEnum = "KEY_ONLY"
)

type QueryResultBatchMoreResultsEnum string

const (
	QueryResultBatchMoreResultsEnumMoreResultsTypeUnspecified QueryResultBatchMoreResultsEnum = "MORE_RESULTS_TYPE_UNSPECIFIED"
	QueryResultBatchMoreResultsEnumNotFinished                QueryResultBatchMoreResultsEnum = "NOT_FINISHED"
	QueryResultBatchMoreResultsEnumMoreResultsAfterLimit      QueryResultBatchMoreResultsEnum = "MORE_RESULTS_AFTER_LIMIT"
	QueryResultBatchMoreResultsEnumMoreResultsAfterCursor     QueryResultBatchMoreResultsEnum = "MORE_RESULTS_AFTER_CURSOR"
	QueryResultBatchMoreResultsEnumNoMoreResults              QueryResultBatchMoreResultsEnum = "NO_MORE_RESULTS"
)

type QueryResultBatch struct {
	EndCursor        *string                               `json:"endCursor"`
	EntityResultType *QueryResultBatchEntityResultTypeEnum `json:"entityResultType"`
	EntityResults    []EntityResult                        `json:"entityResults"`
	MoreResults      *QueryResultBatchMoreResultsEnum      `json:"moreResults"`
	ReadTime         *string                               `json:"readTime"`
	SkippedCursor    *string                               `json:"skippedCursor"`
	SkippedResults   *int32                                `json:"skippedResults"`
	SnapshotVersion  *string                               `json:"snapshotVersion"`
}
