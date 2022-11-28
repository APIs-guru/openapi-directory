package operations

type PutCertificatesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutCertificatesIDUpdateCertificateRequest struct {
	Labels map[string]interface{} `json:"labels,omitempty"`
	Name   *string                `json:"name,omitempty"`
}

// PutCertificatesIDCertificateResponseCertificateStatusError
// If issuance or renewal reports `failed`, this property contains information about what happened
type PutCertificatesIDCertificateResponseCertificateStatusError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnum string

const (
	PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnumPending   PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnum = "pending"
	PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnumCompleted PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnum = "completed"
	PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnumFailed    PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnum = "failed"
)

type PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum string

const (
	PutCertificatesIDCertificateResponseCertificateStatusRenewalEnumScheduled   PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum = "scheduled"
	PutCertificatesIDCertificateResponseCertificateStatusRenewalEnumPending     PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum = "pending"
	PutCertificatesIDCertificateResponseCertificateStatusRenewalEnumFailed      PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum = "failed"
	PutCertificatesIDCertificateResponseCertificateStatusRenewalEnumUnavailable PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum = "unavailable"
)

// PutCertificatesIDCertificateResponseCertificateStatus
// Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
type PutCertificatesIDCertificateResponseCertificateStatus struct {
	Error    *PutCertificatesIDCertificateResponseCertificateStatusError        `json:"error,omitempty"`
	Issuance *PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnum `json:"issuance,omitempty"`
	Renewal  *PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum  `json:"renewal,omitempty"`
}

type PutCertificatesIDCertificateResponseCertificateTypeEnum string

const (
	PutCertificatesIDCertificateResponseCertificateTypeEnumUploaded PutCertificatesIDCertificateResponseCertificateTypeEnum = "uploaded"
	PutCertificatesIDCertificateResponseCertificateTypeEnumManaged  PutCertificatesIDCertificateResponseCertificateTypeEnum = "managed"
)

type PutCertificatesIDCertificateResponseCertificateUsedBy struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PutCertificatesIDCertificateResponseCertificate struct {
	Certificate    string                                                   `json:"certificate"`
	Created        string                                                   `json:"created"`
	DomainNames    []string                                                 `json:"domain_names"`
	Fingerprint    string                                                   `json:"fingerprint"`
	ID             int64                                                    `json:"id"`
	Labels         map[string]string                                        `json:"labels"`
	Name           string                                                   `json:"name"`
	NotValidAfter  string                                                   `json:"not_valid_after"`
	NotValidBefore string                                                   `json:"not_valid_before"`
	Status         *PutCertificatesIDCertificateResponseCertificateStatus   `json:"status,omitempty"`
	Type           *PutCertificatesIDCertificateResponseCertificateTypeEnum `json:"type,omitempty"`
	UsedBy         []PutCertificatesIDCertificateResponseCertificateUsedBy  `json:"used_by"`
}

type PutCertificatesIDCertificateResponse struct {
	Certificate PutCertificatesIDCertificateResponseCertificate `json:"certificate"`
}

type PutCertificatesIDRequest struct {
	PathParams PutCertificatesIDPathParams
	Request    *PutCertificatesIDUpdateCertificateRequest `request:"mediaType=application/json"`
}

type PutCertificatesIDResponse struct {
	CertificateResponse *PutCertificatesIDCertificateResponse
	ContentType         string
	StatusCode          int64
}
