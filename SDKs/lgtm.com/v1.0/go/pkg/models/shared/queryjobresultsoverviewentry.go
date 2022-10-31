package shared

type QueryjobResultsOverviewEntryStatusEnum string

const (
	QueryjobResultsOverviewEntryStatusEnumSuccess QueryjobResultsOverviewEntryStatusEnum = "success"
	QueryjobResultsOverviewEntryStatusEnumError   QueryjobResultsOverviewEntryStatusEnum = "error"
)

type QueryjobResultsOverviewEntry struct {
	Error    *string                                 `json:"error,omitempty"`
	External *int32                                  `json:"external,omitempty"`
	Internal *int32                                  `json:"internal,omitempty"`
	Project  *Project                                `json:"project,omitempty"`
	Status   *QueryjobResultsOverviewEntryStatusEnum `json:"status,omitempty"`
	Total    *int32                                  `json:"total,omitempty"`
}
