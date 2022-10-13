package shared

type GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum string

const (
	GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnumStateUnspecified GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum = "STATE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnumActive           GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum = "ACTIVE"
	GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnumExpired          GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum = "EXPIRED"
)

type GoogleCloudIntegrationsV1alphaCertificate struct {
	CertificateStatus *GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum `json:"certificateStatus"`
	CredentialID      *string                                                         `json:"credentialId"`
	Description       *string                                                         `json:"description"`
	DisplayName       *string                                                         `json:"displayName"`
	Name              *string                                                         `json:"name"`
	RawCertificate    *GoogleCloudIntegrationsV1alphaClientCertificate                `json:"rawCertificate"`
	RequestorID       *string                                                         `json:"requestorId"`
	ValidEndTime      *string                                                         `json:"validEndTime"`
	ValidStartTime    *string                                                         `json:"validStartTime"`
}
