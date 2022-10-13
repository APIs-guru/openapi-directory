package shared

type GoogleCloudDialogflowV2ListSessionEntityTypesResponse struct {
	NextPageToken      *string                                    `json:"nextPageToken"`
	SessionEntityTypes []GoogleCloudDialogflowV2SessionEntityType `json:"sessionEntityTypes"`
}
