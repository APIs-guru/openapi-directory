package operations

type PostCertificatesCreateCertificateRequestTypeEnum string

const (
	PostCertificatesCreateCertificateRequestTypeEnumUploaded PostCertificatesCreateCertificateRequestTypeEnum = "uploaded"
	PostCertificatesCreateCertificateRequestTypeEnumManaged  PostCertificatesCreateCertificateRequestTypeEnum = "managed"
)

type PostCertificatesCreateCertificateRequest struct {
	Certificate *string                                           `json:"certificate,omitempty"`
	DomainNames []string                                          `json:"domain_names,omitempty"`
	Labels      map[string]interface{}                            `json:"labels,omitempty"`
	Name        string                                            `json:"name"`
	PrivateKey  *string                                           `json:"private_key,omitempty"`
	Type        *PostCertificatesCreateCertificateRequestTypeEnum `json:"type,omitempty"`
}

// PostCertificatesCreateCertificateResponseNullableActionError
// Error message for the Action if error occurred, otherwise null
type PostCertificatesCreateCertificateResponseNullableActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostCertificatesCreateCertificateResponseNullableActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostCertificatesCreateCertificateResponseNullableActionStatusEnum string

const (
	PostCertificatesCreateCertificateResponseNullableActionStatusEnumSuccess PostCertificatesCreateCertificateResponseNullableActionStatusEnum = "success"
	PostCertificatesCreateCertificateResponseNullableActionStatusEnumRunning PostCertificatesCreateCertificateResponseNullableActionStatusEnum = "running"
	PostCertificatesCreateCertificateResponseNullableActionStatusEnumError   PostCertificatesCreateCertificateResponseNullableActionStatusEnum = "error"
)

type PostCertificatesCreateCertificateResponseNullableAction struct {
	Command   string                                                             `json:"command"`
	Error     PostCertificatesCreateCertificateResponseNullableActionError       `json:"error"`
	Finished  string                                                             `json:"finished"`
	ID        int64                                                              `json:"id"`
	Progress  float64                                                            `json:"progress"`
	Resources []PostCertificatesCreateCertificateResponseNullableActionResources `json:"resources"`
	Started   string                                                             `json:"started"`
	Status    PostCertificatesCreateCertificateResponseNullableActionStatusEnum  `json:"status"`
}

// PostCertificatesCreateCertificateResponseCertificateStatusError
// If issuance or renewal reports `failed`, this property contains information about what happened
type PostCertificatesCreateCertificateResponseCertificateStatusError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum string

const (
	PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnumPending   PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum = "pending"
	PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnumCompleted PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum = "completed"
	PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnumFailed    PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum = "failed"
)

type PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum string

const (
	PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnumScheduled   PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum = "scheduled"
	PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnumPending     PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum = "pending"
	PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnumFailed      PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum = "failed"
	PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnumUnavailable PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum = "unavailable"
)

// PostCertificatesCreateCertificateResponseCertificateStatus
// Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
type PostCertificatesCreateCertificateResponseCertificateStatus struct {
	Error    *PostCertificatesCreateCertificateResponseCertificateStatusError        `json:"error,omitempty"`
	Issuance *PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum `json:"issuance,omitempty"`
	Renewal  *PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum  `json:"renewal,omitempty"`
}

type PostCertificatesCreateCertificateResponseCertificateTypeEnum string

const (
	PostCertificatesCreateCertificateResponseCertificateTypeEnumUploaded PostCertificatesCreateCertificateResponseCertificateTypeEnum = "uploaded"
	PostCertificatesCreateCertificateResponseCertificateTypeEnumManaged  PostCertificatesCreateCertificateResponseCertificateTypeEnum = "managed"
)

type PostCertificatesCreateCertificateResponseCertificateUsedBy struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostCertificatesCreateCertificateResponseCertificate struct {
	Certificate    string                                                        `json:"certificate"`
	Created        string                                                        `json:"created"`
	DomainNames    []string                                                      `json:"domain_names"`
	Fingerprint    string                                                        `json:"fingerprint"`
	ID             int64                                                         `json:"id"`
	Labels         map[string]string                                             `json:"labels"`
	Name           string                                                        `json:"name"`
	NotValidAfter  string                                                        `json:"not_valid_after"`
	NotValidBefore string                                                        `json:"not_valid_before"`
	Status         *PostCertificatesCreateCertificateResponseCertificateStatus   `json:"status,omitempty"`
	Type           *PostCertificatesCreateCertificateResponseCertificateTypeEnum `json:"type,omitempty"`
	UsedBy         []PostCertificatesCreateCertificateResponseCertificateUsedBy  `json:"used_by"`
}

type PostCertificatesCreateCertificateResponse struct {
	Action      *PostCertificatesCreateCertificateResponseNullableAction `json:"action,omitempty"`
	Certificate PostCertificatesCreateCertificateResponseCertificate     `json:"certificate"`
}

type PostCertificatesRequest struct {
	Request *PostCertificatesCreateCertificateRequest `request:"mediaType=application/json"`
}

type PostCertificatesResponse struct {
	ContentType               string
	CreateCertificateResponse *PostCertificatesCreateCertificateResponse
	StatusCode                int64
}
