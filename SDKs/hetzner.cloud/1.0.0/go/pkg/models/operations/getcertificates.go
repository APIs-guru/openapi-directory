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

type GetCertificates200ApplicationJSONCertificatesStatusError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnum string

const (
	GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnumPending   GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnum = "pending"
	GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnumCompleted GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnum = "completed"
	GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnumFailed    GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnum = "failed"
)

type GetCertificates200ApplicationJSONCertificatesStatusRenewalEnum string

const (
	GetCertificates200ApplicationJSONCertificatesStatusRenewalEnumScheduled   GetCertificates200ApplicationJSONCertificatesStatusRenewalEnum = "scheduled"
	GetCertificates200ApplicationJSONCertificatesStatusRenewalEnumPending     GetCertificates200ApplicationJSONCertificatesStatusRenewalEnum = "pending"
	GetCertificates200ApplicationJSONCertificatesStatusRenewalEnumFailed      GetCertificates200ApplicationJSONCertificatesStatusRenewalEnum = "failed"
	GetCertificates200ApplicationJSONCertificatesStatusRenewalEnumUnavailable GetCertificates200ApplicationJSONCertificatesStatusRenewalEnum = "unavailable"
)

type GetCertificates200ApplicationJSONCertificatesStatus struct {
	Error    *GetCertificates200ApplicationJSONCertificatesStatusError        `json:"error,omitempty"`
	Issuance *GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnum `json:"issuance,omitempty"`
	Renewal  *GetCertificates200ApplicationJSONCertificatesStatusRenewalEnum  `json:"renewal,omitempty"`
}

type GetCertificates200ApplicationJSONCertificatesTypeEnum string

const (
	GetCertificates200ApplicationJSONCertificatesTypeEnumUploaded GetCertificates200ApplicationJSONCertificatesTypeEnum = "uploaded"
	GetCertificates200ApplicationJSONCertificatesTypeEnumManaged  GetCertificates200ApplicationJSONCertificatesTypeEnum = "managed"
)

type GetCertificates200ApplicationJSONCertificatesUsedBy struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetCertificates200ApplicationJSONCertificatesCertificate struct {
	Certificate    string                                                 `json:"certificate"`
	Created        string                                                 `json:"created"`
	DomainNames    []string                                               `json:"domain_names"`
	Fingerprint    string                                                 `json:"fingerprint"`
	ID             int64                                                  `json:"id"`
	Labels         map[string]string                                      `json:"labels"`
	Name           string                                                 `json:"name"`
	NotValidAfter  string                                                 `json:"not_valid_after"`
	NotValidBefore string                                                 `json:"not_valid_before"`
	Status         *GetCertificates200ApplicationJSONCertificatesStatus   `json:"status,omitempty"`
	Type           *GetCertificates200ApplicationJSONCertificatesTypeEnum `json:"type,omitempty"`
	UsedBy         []GetCertificates200ApplicationJSONCertificatesUsedBy  `json:"used_by"`
}

type GetCertificates200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetCertificates200ApplicationJSONMeta struct {
	Pagination GetCertificates200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetCertificates200ApplicationJSONCertificatesResponse struct {
	Certificates []GetCertificates200ApplicationJSONCertificatesCertificate `json:"certificates"`
	Meta         *GetCertificates200ApplicationJSONMeta                     `json:"meta,omitempty"`
}

type GetCertificatesResponse struct {
	CertificatesResponse *GetCertificates200ApplicationJSONCertificatesResponse
	ContentType          string
	StatusCode           int64
}
