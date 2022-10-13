package shared

type AutoFillRequest struct {
	Range                *GridRange            `json:"range"`
	SourceAndDestination *SourceAndDestination `json:"sourceAndDestination"`
	UseAlternateSeries   *bool                 `json:"useAlternateSeries"`
}
