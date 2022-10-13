package shared

type GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse struct {
	InboundSamlConfigs []GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig `json:"inboundSamlConfigs"`
	NextPageToken      *string                                              `json:"nextPageToken"`
}
