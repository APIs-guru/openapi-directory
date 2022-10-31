package shared

type MergeCellsRequestMergeTypeEnum string

const (
	MergeCellsRequestMergeTypeEnumMergeAll     MergeCellsRequestMergeTypeEnum = "MERGE_ALL"
	MergeCellsRequestMergeTypeEnumMergeColumns MergeCellsRequestMergeTypeEnum = "MERGE_COLUMNS"
	MergeCellsRequestMergeTypeEnumMergeRows    MergeCellsRequestMergeTypeEnum = "MERGE_ROWS"
)

type MergeCellsRequest struct {
	MergeType *MergeCellsRequestMergeTypeEnum `json:"mergeType,omitempty"`
	Range     *GridRange                      `json:"range,omitempty"`
}
