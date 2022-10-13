package shared

type GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse struct {
	NextPageToken      *string                                         `json:"nextPageToken"`
	SessionEntityTypes []GoogleCloudDialogflowV2beta1SessionEntityType `json:"sessionEntityTypes"`
}
