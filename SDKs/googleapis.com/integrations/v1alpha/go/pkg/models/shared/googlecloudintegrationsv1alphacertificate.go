package shared




type GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum string

const (
    GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnumStateUnspecified GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum = "STATE_UNSPECIFIED"
GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnumActive GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum = "ACTIVE"
GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnumExpired GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum = "EXPIRED"
)


type GoogleCloudIntegrationsV1alphaCertificate struct {
    CertificateStatus *GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum `json:"certificateStatus,omitempty"`
    CredentialID *string `json:"credentialId,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    RawCertificate *GoogleCloudIntegrationsV1alphaClientCertificate `json:"rawCertificate,omitempty"`
    RequestorID *string `json:"requestorId,omitempty"`
    ValidEndTime *string `json:"validEndTime,omitempty"`
    ValidStartTime *string `json:"validStartTime,omitempty"`
    
}

