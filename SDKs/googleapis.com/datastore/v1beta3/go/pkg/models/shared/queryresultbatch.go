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

// QueryResultBatch
// A batch of results produced by a query.
type QueryResultBatch struct {
	EndCursor        *string                               `json:"endCursor,omitempty"`
	EntityResultType *QueryResultBatchEntityResultTypeEnum `json:"entityResultType,omitempty"`
	EntityResults    []EntityResult                        `json:"entityResults,omitempty"`
	MoreResults      *QueryResultBatchMoreResultsEnum      `json:"moreResults,omitempty"`
	ReadTime         *string                               `json:"readTime,omitempty"`
	SkippedCursor    *string                               `json:"skippedCursor,omitempty"`
	SkippedResults   *int32                                `json:"skippedResults,omitempty"`
	SnapshotVersion  *string                               `json:"snapshotVersion,omitempty"`
}
