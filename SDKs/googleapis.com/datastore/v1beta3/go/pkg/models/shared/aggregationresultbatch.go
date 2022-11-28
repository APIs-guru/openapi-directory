package shared

type AggregationResultBatchMoreResultsEnum string

const (
	AggregationResultBatchMoreResultsEnumMoreResultsTypeUnspecified AggregationResultBatchMoreResultsEnum = "MORE_RESULTS_TYPE_UNSPECIFIED"
	AggregationResultBatchMoreResultsEnumNotFinished                AggregationResultBatchMoreResultsEnum = "NOT_FINISHED"
	AggregationResultBatchMoreResultsEnumMoreResultsAfterLimit      AggregationResultBatchMoreResultsEnum = "MORE_RESULTS_AFTER_LIMIT"
	AggregationResultBatchMoreResultsEnumMoreResultsAfterCursor     AggregationResultBatchMoreResultsEnum = "MORE_RESULTS_AFTER_CURSOR"
	AggregationResultBatchMoreResultsEnumNoMoreResults              AggregationResultBatchMoreResultsEnum = "NO_MORE_RESULTS"
)

// AggregationResultBatch
// A batch of aggregation results produced by an aggregation query.
type AggregationResultBatch struct {
	AggregationResults []AggregationResult                    `json:"aggregationResults,omitempty"`
	MoreResults        *AggregationResultBatchMoreResultsEnum `json:"moreResults,omitempty"`
	ReadTime           *string                                `json:"readTime,omitempty"`
}
