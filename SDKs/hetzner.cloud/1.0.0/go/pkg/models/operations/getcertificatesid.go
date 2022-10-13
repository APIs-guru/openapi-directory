package operations

type GetCertificatesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCertificatesIDRequest struct {
	PathParams GetCertificatesIDPathParams
}

type GetCertificatesID200ApplicationJSONCertificateStatusError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum string

const (
	GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnumPending   GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum = "pending"
	GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnumCompleted GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum = "completed"
	GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnumFailed    GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum = "failed"
)

type GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnum string

const (
	GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnumScheduled   GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnum = "scheduled"
	GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnumPending     GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnum = "pending"
	GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnumFailed      GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnum = "failed"
	GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnumUnavailable GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnum = "unavailable"
)

type GetCertificatesID200ApplicationJSONCertificateStatus struct {
	Error    *GetCertificatesID200ApplicationJSONCertificateStatusError        `json:"error"`
	Issuance *GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum `json:"issuance"`
	Renewal  *GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnum  `json:"renewal"`
}

type GetCertificatesID200ApplicationJSONCertificateTypeEnum string

const (
	GetCertificatesID200ApplicationJSONCertificateTypeEnumUploaded GetCertificatesID200ApplicationJSONCertificateTypeEnum = "uploaded"
	GetCertificatesID200ApplicationJSONCertificateTypeEnumManaged  GetCertificatesID200ApplicationJSONCertificateTypeEnum = "managed"
)

type GetCertificatesID200ApplicationJSONCertificateUsedBy struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetCertificatesID200ApplicationJSONCertificateCertificate struct {
	Certificate    string                                                  `json:"certificate"`
	Created        string                                                  `json:"created"`
	DomainNames    []string                                                `json:"domain_names"`
	Fingerprint    string                                                  `json:"fingerprint"`
	ID             int64                                                   `json:"id"`
	Labels         map[string]string                                       `json:"labels"`
	Name           string                                                  `json:"name"`
	NotValidAfter  string                                                  `json:"not_valid_after"`
	NotValidBefore string                                                  `json:"not_valid_before"`
	Status         *GetCertificatesID200ApplicationJSONCertificateStatus   `json:"status"`
	Type           *GetCertificatesID200ApplicationJSONCertificateTypeEnum `json:"type"`
	UsedBy         []GetCertificatesID200ApplicationJSONCertificateUsedBy  `json:"used_by"`
}

type GetCertificatesID200ApplicationJSONCertificateResponse struct {
	Certificate GetCertificatesID200ApplicationJSONCertificateCertificate `json:"certificate"`
}

type GetCertificatesIDResponse struct {
	CertificateResponse *GetCertificatesID200ApplicationJSONCertificateResponse
	ContentType         string
	StatusCode          int64
}
