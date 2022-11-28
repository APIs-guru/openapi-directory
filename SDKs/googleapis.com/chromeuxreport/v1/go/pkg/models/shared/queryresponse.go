package shared

// QueryResponse
// Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
type QueryResponse struct {
	Record                  *Record           `json:"record,omitempty"`
	URLNormalizationDetails *URLNormalization `json:"urlNormalizationDetails,omitempty"`
}
