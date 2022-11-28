package shared

// ListInboundSamlSsoProfilesResponse
// Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.
type ListInboundSamlSsoProfilesResponse struct {
	InboundSamlSsoProfiles []InboundSamlSsoProfile `json:"inboundSamlSsoProfiles,omitempty"`
	NextPageToken          *string                 `json:"nextPageToken,omitempty"`
}
