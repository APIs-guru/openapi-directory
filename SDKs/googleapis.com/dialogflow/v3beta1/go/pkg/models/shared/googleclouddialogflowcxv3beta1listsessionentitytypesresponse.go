package shared

// GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse
// The response message for SessionEntityTypes.ListSessionEntityTypes.
type GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse struct {
	NextPageToken      *string                                           `json:"nextPageToken,omitempty"`
	SessionEntityTypes []GoogleCloudDialogflowCxV3beta1SessionEntityType `json:"sessionEntityTypes,omitempty"`
}
