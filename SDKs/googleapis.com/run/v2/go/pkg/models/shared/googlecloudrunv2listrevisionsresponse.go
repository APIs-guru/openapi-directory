package shared

// GoogleCloudRunV2ListRevisionsResponse
// Response message containing a list of Revisions.
type GoogleCloudRunV2ListRevisionsResponse struct {
	NextPageToken *string                    `json:"nextPageToken,omitempty"`
	Revisions     []GoogleCloudRunV2Revision `json:"revisions,omitempty"`
}
