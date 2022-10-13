package shared

type QueryjobResultsOverviewEntryStatusEnum string

const (
	QueryjobResultsOverviewEntryStatusEnumSuccess QueryjobResultsOverviewEntryStatusEnum = "success"
	QueryjobResultsOverviewEntryStatusEnumError   QueryjobResultsOverviewEntryStatusEnum = "error"
)

type QueryjobResultsOverviewEntry struct {
	Error    *string                                 `json:"error"`
	External *int32                                  `json:"external"`
	Internal *int32                                  `json:"internal"`
	Project  *Project                                `json:"project"`
	Status   *QueryjobResultsOverviewEntryStatusEnum `json:"status"`
	Total    *int32                                  `json:"total"`
}
