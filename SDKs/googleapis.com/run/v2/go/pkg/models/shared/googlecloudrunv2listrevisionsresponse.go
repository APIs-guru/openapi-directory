package shared

type GoogleCloudRunV2ListRevisionsResponse struct {
	NextPageToken *string                    `json:"nextPageToken"`
	Revisions     []GoogleCloudRunV2Revision `json:"revisions"`
}
