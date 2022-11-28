package shared

// ScheduleDeleteCertificateAuthorityRequest
// Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.
type ScheduleDeleteCertificateAuthorityRequest struct {
	IgnoreActiveCertificates *bool   `json:"ignoreActiveCertificates,omitempty"`
	RequestID                *string `json:"requestId,omitempty"`
}
