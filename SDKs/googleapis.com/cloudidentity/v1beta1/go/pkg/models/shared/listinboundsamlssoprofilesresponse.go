package shared

type ListInboundSamlSsoProfilesResponse struct {
	InboundSamlSsoProfiles []InboundSamlSsoProfile `json:"inboundSamlSsoProfiles"`
	NextPageToken          *string                 `json:"nextPageToken"`
}
