package shared

type GoogleLongrunningListOperationsResponse struct {
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
	Operations    []GoogleLongrunningOperation `json:"operations,omitempty"`
}
