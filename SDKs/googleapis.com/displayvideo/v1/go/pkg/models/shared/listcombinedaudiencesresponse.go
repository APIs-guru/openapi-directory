package shared

type ListCombinedAudiencesResponse struct {
	CombinedAudiences []CombinedAudience `json:"combinedAudiences"`
	NextPageToken     *string            `json:"nextPageToken"`
}
