package shared

type ReplaceNamedRangeContentRequest struct {
	NamedRangeID   *string `json:"namedRangeId"`
	NamedRangeName *string `json:"namedRangeName"`
	Text           *string `json:"text"`
}
