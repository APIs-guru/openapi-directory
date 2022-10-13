package shared

type ListGoogleAudiencesResponse struct {
	GoogleAudiences []GoogleAudience `json:"googleAudiences"`
	NextPageToken   *string          `json:"nextPageToken"`
}
