package shared

type ScheduleDeleteCertificateAuthorityRequest struct {
	IgnoreActiveCertificates *bool   `json:"ignoreActiveCertificates"`
	RequestID                *string `json:"requestId"`
}
