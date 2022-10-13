package shared

type DatafeedFormat struct {
	ColumnDelimiter *string `json:"columnDelimiter"`
	FileEncoding    *string `json:"fileEncoding"`
	QuotingMode     *string `json:"quotingMode"`
}
