package operations

type PutCertificatesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutCertificatesIDRequestBodyUpdateCertificateRequest struct {
	Labels map[string]interface{} `json:"labels,omitempty"`
	Name   *string                `json:"name,omitempty"`
}

type PutCertificatesIDRequest struct {
	PathParams PutCertificatesIDPathParams
	Request    *PutCertificatesIDRequestBodyUpdateCertificateRequest `request:"mediaType=application/json"`
}

type PutCertificatesID200ApplicationJSONCertificateStatusError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum string

const (
	PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnumPending   PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum = "pending"
	PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnumCompleted PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum = "completed"
	PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnumFailed    PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum = "failed"
)

type PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnum string

const (
	PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnumScheduled   PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnum = "scheduled"
	PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnumPending     PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnum = "pending"
	PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnumFailed      PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnum = "failed"
	PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnumUnavailable PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnum = "unavailable"
)

type PutCertificatesID200ApplicationJSONCertificateStatus struct {
	Error    *PutCertificatesID200ApplicationJSONCertificateStatusError        `json:"error,omitempty"`
	Issuance *PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum `json:"issuance,omitempty"`
	Renewal  *PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnum  `json:"renewal,omitempty"`
}

type PutCertificatesID200ApplicationJSONCertificateTypeEnum string

const (
	PutCertificatesID200ApplicationJSONCertificateTypeEnumUploaded PutCertificatesID200ApplicationJSONCertificateTypeEnum = "uploaded"
	PutCertificatesID200ApplicationJSONCertificateTypeEnumManaged  PutCertificatesID200ApplicationJSONCertificateTypeEnum = "managed"
)

type PutCertificatesID200ApplicationJSONCertificateUsedBy struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PutCertificatesID200ApplicationJSONCertificateCertificate struct {
	Certificate    string                                                  `json:"certificate"`
	Created        string                                                  `json:"created"`
	DomainNames    []string                                                `json:"domain_names"`
	Fingerprint    string                                                  `json:"fingerprint"`
	ID             int64                                                   `json:"id"`
	Labels         map[string]string                                       `json:"labels"`
	Name           string                                                  `json:"name"`
	NotValidAfter  string                                                  `json:"not_valid_after"`
	NotValidBefore string                                                  `json:"not_valid_before"`
	Status         *PutCertificatesID200ApplicationJSONCertificateStatus   `json:"status,omitempty"`
	Type           *PutCertificatesID200ApplicationJSONCertificateTypeEnum `json:"type,omitempty"`
	UsedBy         []PutCertificatesID200ApplicationJSONCertificateUsedBy  `json:"used_by"`
}

type PutCertificatesID200ApplicationJSONCertificateResponse struct {
	Certificate PutCertificatesID200ApplicationJSONCertificateCertificate `json:"certificate"`
}

type PutCertificatesIDResponse struct {
	CertificateResponse *PutCertificatesID200ApplicationJSONCertificateResponse
	ContentType         string
	StatusCode          int64
}
