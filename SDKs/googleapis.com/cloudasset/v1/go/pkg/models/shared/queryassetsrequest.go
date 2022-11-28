package shared

// QueryAssetsRequest
// QueryAssets request.
type QueryAssetsRequest struct {
	JobReference   *string                  `json:"jobReference,omitempty"`
	OutputConfig   *QueryAssetsOutputConfig `json:"outputConfig,omitempty"`
	PageSize       *int32                   `json:"pageSize,omitempty"`
	PageToken      *string                  `json:"pageToken,omitempty"`
	ReadTime       *string                  `json:"readTime,omitempty"`
	ReadTimeWindow *TimeWindow              `json:"readTimeWindow,omitempty"`
	Statement      *string                  `json:"statement,omitempty"`
	Timeout        *string                  `json:"timeout,omitempty"`
}
