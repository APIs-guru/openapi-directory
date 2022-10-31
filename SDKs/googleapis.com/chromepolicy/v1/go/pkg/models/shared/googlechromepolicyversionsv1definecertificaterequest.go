package shared

type GoogleChromePolicyVersionsV1DefineCertificateRequest struct {
	CeritificateName *string                                      `json:"ceritificateName,omitempty"`
	Certificate      *string                                      `json:"certificate,omitempty"`
	Settings         []GoogleChromePolicyVersionsV1NetworkSetting `json:"settings,omitempty"`
	TargetResource   *string                                      `json:"targetResource,omitempty"`
}
