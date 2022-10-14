package shared

type ListInboundSamlSsoProfilesResponse struct {
	InboundSamlSsoProfiles []InboundSamlSsoProfile `json:"inboundSamlSsoProfiles,omitempty"`
	NextPageToken          *string                 `json:"nextPageToken,omitempty"`
}
