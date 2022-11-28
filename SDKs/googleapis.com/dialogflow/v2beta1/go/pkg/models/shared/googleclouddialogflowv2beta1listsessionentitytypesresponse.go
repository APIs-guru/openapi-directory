package shared

// GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse
// The response message for SessionEntityTypes.ListSessionEntityTypes.
type GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse struct {
	NextPageToken      *string                                         `json:"nextPageToken,omitempty"`
	SessionEntityTypes []GoogleCloudDialogflowV2beta1SessionEntityType `json:"sessionEntityTypes,omitempty"`
}
