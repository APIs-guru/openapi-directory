package shared

type CountArtifactsRequestViewEnum string

const (
	CountArtifactsRequestViewEnumCountResultViewUnspecified CountArtifactsRequestViewEnum = "COUNT_RESULT_VIEW_UNSPECIFIED"
	CountArtifactsRequestViewEnumTotalCount                 CountArtifactsRequestViewEnum = "TOTAL_COUNT"
	CountArtifactsRequestViewEnumAll                        CountArtifactsRequestViewEnum = "ALL"
)

// CountArtifactsRequest
// Count artifacts request.
type CountArtifactsRequest struct {
	Query *Query                         `json:"query,omitempty"`
	View  *CountArtifactsRequestViewEnum `json:"view,omitempty"`
}
