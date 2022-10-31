package operations

type GetCertificatesSortEnum string

const (
	GetCertificatesSortEnumID          GetCertificatesSortEnum = "id"
	GetCertificatesSortEnumIDAsc       GetCertificatesSortEnum = "id:asc"
	GetCertificatesSortEnumIDDesc      GetCertificatesSortEnum = "id:desc"
	GetCertificatesSortEnumName        GetCertificatesSortEnum = "name"
	GetCertificatesSortEnumNameAsc     GetCertificatesSortEnum = "name:asc"
	GetCertificatesSortEnumNameDesc    GetCertificatesSortEnum = "name:desc"
	GetCertificatesSortEnumCreated     GetCertificatesSortEnum = "created"
	GetCertificatesSortEnumCreatedAsc  GetCertificatesSortEnum = "created:asc"
	GetCertificatesSortEnumCreatedDesc GetCertificatesSortEnum = "created:desc"
)

type GetCertificatesTypeParameterTypeEnum string

const (
	GetCertificatesTypeParameterTypeEnumUploaded GetCertificatesTypeParameterTypeEnum = "uploaded"
	GetCertificatesTypeParameterTypeEnumManaged  GetCertificatesTypeParameterTypeEnum = "managed"
)

type GetCertificatesQueryParams struct {
	LabelSelector *string                               `queryParam:"style=form,explode=true,name=label_selector"`
	Name          *string                               `queryParam:"style=form,explode=true,name=name"`
	Sort          *GetCertificatesSortEnum              `queryParam:"style=form,explode=true,name=sort"`
	Type          *GetCertificatesTypeParameterTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetCertificatesRequest struct {
	QueryParams GetCertificatesQueryParams
}

type GetCertificatesCertificatesResponseCertificateStatusError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum string

const (
	GetCertificatesCertificatesResponseCertificateStatusIssuanceEnumPending   GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum = "pending"
	GetCertificatesCertificatesResponseCertificateStatusIssuanceEnumCompleted GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum = "completed"
	GetCertificatesCertificatesResponseCertificateStatusIssuanceEnumFailed    GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum = "failed"
)

type GetCertificatesCertificatesResponseCertificateStatusRenewalEnum string

const (
	GetCertificatesCertificatesResponseCertificateStatusRenewalEnumScheduled   GetCertificatesCertificatesResponseCertificateStatusRenewalEnum = "scheduled"
	GetCertificatesCertificatesResponseCertificateStatusRenewalEnumPending     GetCertificatesCertificatesResponseCertificateStatusRenewalEnum = "pending"
	GetCertificatesCertificatesResponseCertificateStatusRenewalEnumFailed      GetCertificatesCertificatesResponseCertificateStatusRenewalEnum = "failed"
	GetCertificatesCertificatesResponseCertificateStatusRenewalEnumUnavailable GetCertificatesCertificatesResponseCertificateStatusRenewalEnum = "unavailable"
)

type GetCertificatesCertificatesResponseCertificateStatus struct {
	Error    *GetCertificatesCertificatesResponseCertificateStatusError        `json:"error,omitempty"`
	Issuance *GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum `json:"issuance,omitempty"`
	Renewal  *GetCertificatesCertificatesResponseCertificateStatusRenewalEnum  `json:"renewal,omitempty"`
}

type GetCertificatesCertificatesResponseCertificateTypeEnum string

const (
	GetCertificatesCertificatesResponseCertificateTypeEnumUploaded GetCertificatesCertificatesResponseCertificateTypeEnum = "uploaded"
	GetCertificatesCertificatesResponseCertificateTypeEnumManaged  GetCertificatesCertificatesResponseCertificateTypeEnum = "managed"
)

type GetCertificatesCertificatesResponseCertificateUsedBy struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetCertificatesCertificatesResponseCertificate struct {
	Certificate    string                                                  `json:"certificate"`
	Created        string                                                  `json:"created"`
	DomainNames    []string                                                `json:"domain_names"`
	Fingerprint    string                                                  `json:"fingerprint"`
	ID             int64                                                   `json:"id"`
	Labels         map[string]string                                       `json:"labels"`
	Name           string                                                  `json:"name"`
	NotValidAfter  string                                                  `json:"not_valid_after"`
	NotValidBefore string                                                  `json:"not_valid_before"`
	Status         *GetCertificatesCertificatesResponseCertificateStatus   `json:"status,omitempty"`
	Type           *GetCertificatesCertificatesResponseCertificateTypeEnum `json:"type,omitempty"`
	UsedBy         []GetCertificatesCertificatesResponseCertificateUsedBy  `json:"used_by"`
}

type GetCertificatesCertificatesResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetCertificatesCertificatesResponseMeta struct {
	Pagination GetCertificatesCertificatesResponseMetaPagination `json:"pagination"`
}

type GetCertificatesCertificatesResponse struct {
	Certificates []GetCertificatesCertificatesResponseCertificate `json:"certificates"`
	Meta         *GetCertificatesCertificatesResponseMeta         `json:"meta,omitempty"`
}

type GetCertificatesResponse struct {
	CertificatesResponse *GetCertificatesCertificatesResponse
	ContentType          string
	StatusCode           int64
}
