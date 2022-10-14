package shared

type GoogleChromePolicyV1DefineCertificateResponse struct {
	NetworkID      *string                              `json:"networkId,omitempty"`
	Settings       []GoogleChromePolicyV1NetworkSetting `json:"settings,omitempty"`
	TargetResource *string                              `json:"targetResource,omitempty"`
}
