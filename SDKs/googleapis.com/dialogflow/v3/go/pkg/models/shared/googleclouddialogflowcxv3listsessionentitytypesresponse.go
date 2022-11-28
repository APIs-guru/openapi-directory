package shared

// GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse
// The response message for SessionEntityTypes.ListSessionEntityTypes.
type GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse struct {
	NextPageToken      *string                                      `json:"nextPageToken,omitempty"`
	SessionEntityTypes []GoogleCloudDialogflowCxV3SessionEntityType `json:"sessionEntityTypes,omitempty"`
}
