package shared

// GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse
// Response for ListInboundSamlConfigs
type GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse struct {
	InboundSamlConfigs []GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig `json:"inboundSamlConfigs,omitempty"`
	NextPageToken      *string                                              `json:"nextPageToken,omitempty"`
}
