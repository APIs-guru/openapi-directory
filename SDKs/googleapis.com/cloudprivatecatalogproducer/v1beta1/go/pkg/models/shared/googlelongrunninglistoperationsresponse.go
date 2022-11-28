package shared

// GoogleLongrunningListOperationsResponse
// The response message for Operations.ListOperations.
type GoogleLongrunningListOperationsResponse struct {
	NextPageToken *string
	Operations    []GoogleLongrunningOperation
}
