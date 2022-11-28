package shared

// QueryAssetsResponse
// QueryAssets response.
type QueryAssetsResponse struct {
	Done         *bool                    `json:"done,omitempty"`
	Error        *Status                  `json:"error,omitempty"`
	JobReference *string                  `json:"jobReference,omitempty"`
	OutputConfig *QueryAssetsOutputConfig `json:"outputConfig,omitempty"`
	QueryResult  *QueryResult             `json:"queryResult,omitempty"`
}
