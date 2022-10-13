package shared

type GoogleLongrunningListOperationsResponse struct {
	NextPageToken *string                      `json:"nextPageToken"`
	Operations    []GoogleLongrunningOperation `json:"operations"`
}
