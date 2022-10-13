package shared

type CountArtifactsRequestViewEnum string

const (
	CountArtifactsRequestViewEnumCountResultViewUnspecified CountArtifactsRequestViewEnum = "COUNT_RESULT_VIEW_UNSPECIFIED"
	CountArtifactsRequestViewEnumTotalCount                 CountArtifactsRequestViewEnum = "TOTAL_COUNT"
	CountArtifactsRequestViewEnumAll                        CountArtifactsRequestViewEnum = "ALL"
)

type CountArtifactsRequest struct {
	Query *Query                         `json:"query"`
	View  *CountArtifactsRequestViewEnum `json:"view"`
}
