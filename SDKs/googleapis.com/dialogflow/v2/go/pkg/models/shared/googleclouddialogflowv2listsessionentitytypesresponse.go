package shared

// GoogleCloudDialogflowV2ListSessionEntityTypesResponse
// The response message for SessionEntityTypes.ListSessionEntityTypes.
type GoogleCloudDialogflowV2ListSessionEntityTypesResponse struct {
	NextPageToken      *string                                    `json:"nextPageToken,omitempty"`
	SessionEntityTypes []GoogleCloudDialogflowV2SessionEntityType `json:"sessionEntityTypes,omitempty"`
}
