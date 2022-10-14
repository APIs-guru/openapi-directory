package shared

type DatafeedFormat struct {
	ColumnDelimiter *string `json:"columnDelimiter,omitempty"`
	FileEncoding    *string `json:"fileEncoding,omitempty"`
	QuotingMode     *string `json:"quotingMode,omitempty"`
}
