package shared

type ListFirstAndThirdPartyAudiencesResponse struct {
	FirstAndThirdPartyAudiences []FirstAndThirdPartyAudience `json:"firstAndThirdPartyAudiences"`
	NextPageToken               *string                      `json:"nextPageToken"`
}
