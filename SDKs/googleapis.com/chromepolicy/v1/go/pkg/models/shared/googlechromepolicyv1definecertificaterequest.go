package shared

type GoogleChromePolicyV1DefineCertificateRequest struct {
	CeritificateName *string                              `json:"ceritificateName,omitempty"`
	Certificate      *string                              `json:"certificate,omitempty"`
	Settings         []GoogleChromePolicyV1NetworkSetting `json:"settings,omitempty"`
	TargetResource   *string                              `json:"targetResource,omitempty"`
}
