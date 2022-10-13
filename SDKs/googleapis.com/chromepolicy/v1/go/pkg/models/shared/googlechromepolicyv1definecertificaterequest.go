package shared

type GoogleChromePolicyV1DefineCertificateRequest struct {
	CeritificateName *string                              `json:"ceritificateName"`
	Certificate      *string                              `json:"certificate"`
	Settings         []GoogleChromePolicyV1NetworkSetting `json:"settings"`
	TargetResource   *string                              `json:"targetResource"`
}
