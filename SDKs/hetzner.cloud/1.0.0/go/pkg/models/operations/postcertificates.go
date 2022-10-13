package operations

type PostCertificatesRequestBodyTypeEnum string

const (
	PostCertificatesRequestBodyTypeEnumUploaded PostCertificatesRequestBodyTypeEnum = "uploaded"
	PostCertificatesRequestBodyTypeEnumManaged  PostCertificatesRequestBodyTypeEnum = "managed"
)

type PostCertificatesRequestBodyCreateCertificateRequest struct {
	Certificate *string                              `json:"certificate"`
	DomainNames []string                             `json:"domain_names"`
	Labels      map[string]interface{}               `json:"labels"`
	Name        string                               `json:"name"`
	PrivateKey  *string                              `json:"private_key"`
	Type        *PostCertificatesRequestBodyTypeEnum `json:"type"`
}

type PostCertificatesRequest struct {
	Request *PostCertificatesRequestBodyCreateCertificateRequest `request:"mediaType=application/json"`
}

type PostCertificates201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostCertificates201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostCertificates201ApplicationJSONActionStatusEnum string

const (
	PostCertificates201ApplicationJSONActionStatusEnumSuccess PostCertificates201ApplicationJSONActionStatusEnum = "success"
	PostCertificates201ApplicationJSONActionStatusEnumRunning PostCertificates201ApplicationJSONActionStatusEnum = "running"
	PostCertificates201ApplicationJSONActionStatusEnumError   PostCertificates201ApplicationJSONActionStatusEnum = "error"
)

type PostCertificates201ApplicationJSONActionNullableAction struct {
	Command   string                                              `json:"command"`
	Error     PostCertificates201ApplicationJSONActionError       `json:"error"`
	Finished  string                                              `json:"finished"`
	ID        int64                                               `json:"id"`
	Progress  float64                                             `json:"progress"`
	Resources []PostCertificates201ApplicationJSONActionResources `json:"resources"`
	Started   string                                              `json:"started"`
	Status    PostCertificates201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostCertificates201ApplicationJSONCertificateStatusError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type PostCertificates201ApplicationJSONCertificateStatusIssuanceEnum string

const (
	PostCertificates201ApplicationJSONCertificateStatusIssuanceEnumPending   PostCertificates201ApplicationJSONCertificateStatusIssuanceEnum = "pending"
	PostCertificates201ApplicationJSONCertificateStatusIssuanceEnumCompleted PostCertificates201ApplicationJSONCertificateStatusIssuanceEnum = "completed"
	PostCertificates201ApplicationJSONCertificateStatusIssuanceEnumFailed    PostCertificates201ApplicationJSONCertificateStatusIssuanceEnum = "failed"
)

type PostCertificates201ApplicationJSONCertificateStatusRenewalEnum string

const (
	PostCertificates201ApplicationJSONCertificateStatusRenewalEnumScheduled   PostCertificates201ApplicationJSONCertificateStatusRenewalEnum = "scheduled"
	PostCertificates201ApplicationJSONCertificateStatusRenewalEnumPending     PostCertificates201ApplicationJSONCertificateStatusRenewalEnum = "pending"
	PostCertificates201ApplicationJSONCertificateStatusRenewalEnumFailed      PostCertificates201ApplicationJSONCertificateStatusRenewalEnum = "failed"
	PostCertificates201ApplicationJSONCertificateStatusRenewalEnumUnavailable PostCertificates201ApplicationJSONCertificateStatusRenewalEnum = "unavailable"
)

type PostCertificates201ApplicationJSONCertificateStatus struct {
	Error    *PostCertificates201ApplicationJSONCertificateStatusError        `json:"error"`
	Issuance *PostCertificates201ApplicationJSONCertificateStatusIssuanceEnum `json:"issuance"`
	Renewal  *PostCertificates201ApplicationJSONCertificateStatusRenewalEnum  `json:"renewal"`
}

type PostCertificates201ApplicationJSONCertificateTypeEnum string

const (
	PostCertificates201ApplicationJSONCertificateTypeEnumUploaded PostCertificates201ApplicationJSONCertificateTypeEnum = "uploaded"
	PostCertificates201ApplicationJSONCertificateTypeEnumManaged  PostCertificates201ApplicationJSONCertificateTypeEnum = "managed"
)

type PostCertificates201ApplicationJSONCertificateUsedBy struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostCertificates201ApplicationJSONCertificateCertificate struct {
	Certificate    string                                                 `json:"certificate"`
	Created        string                                                 `json:"created"`
	DomainNames    []string                                               `json:"domain_names"`
	Fingerprint    string                                                 `json:"fingerprint"`
	ID             int64                                                  `json:"id"`
	Labels         map[string]string                                      `json:"labels"`
	Name           string                                                 `json:"name"`
	NotValidAfter  string                                                 `json:"not_valid_after"`
	NotValidBefore string                                                 `json:"not_valid_before"`
	Status         *PostCertificates201ApplicationJSONCertificateStatus   `json:"status"`
	Type           *PostCertificates201ApplicationJSONCertificateTypeEnum `json:"type"`
	UsedBy         []PostCertificates201ApplicationJSONCertificateUsedBy  `json:"used_by"`
}

type PostCertificates201ApplicationJSONCreateCertificateResponse struct {
	Action      *PostCertificates201ApplicationJSONActionNullableAction  `json:"action"`
	Certificate PostCertificates201ApplicationJSONCertificateCertificate `json:"certificate"`
}

type PostCertificatesResponse struct {
	ContentType               string
	CreateCertificateResponse *PostCertificates201ApplicationJSONCreateCertificateResponse
	StatusCode                int64
}
