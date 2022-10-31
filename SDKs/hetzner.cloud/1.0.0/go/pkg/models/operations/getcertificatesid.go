package operations



type GetCertificatesIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCertificatesIDRequest struct {
    PathParams GetCertificatesIDPathParams 
    
}

type GetCertificatesIDCertificateResponseCertificateStatusError struct {
    Code *string `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}


type GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnum string

const (
    GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnumPending GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnum = "pending"
GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnumCompleted GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnum = "completed"
GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnumFailed GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnum = "failed"
)



type GetCertificatesIDCertificateResponseCertificateStatusRenewalEnum string

const (
    GetCertificatesIDCertificateResponseCertificateStatusRenewalEnumScheduled GetCertificatesIDCertificateResponseCertificateStatusRenewalEnum = "scheduled"
GetCertificatesIDCertificateResponseCertificateStatusRenewalEnumPending GetCertificatesIDCertificateResponseCertificateStatusRenewalEnum = "pending"
GetCertificatesIDCertificateResponseCertificateStatusRenewalEnumFailed GetCertificatesIDCertificateResponseCertificateStatusRenewalEnum = "failed"
GetCertificatesIDCertificateResponseCertificateStatusRenewalEnumUnavailable GetCertificatesIDCertificateResponseCertificateStatusRenewalEnum = "unavailable"
)


type GetCertificatesIDCertificateResponseCertificateStatus struct {
    Error *GetCertificatesIDCertificateResponseCertificateStatusError `json:"error,omitempty"`
    Issuance *GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnum `json:"issuance,omitempty"`
    Renewal *GetCertificatesIDCertificateResponseCertificateStatusRenewalEnum `json:"renewal,omitempty"`
    
}


type GetCertificatesIDCertificateResponseCertificateTypeEnum string

const (
    GetCertificatesIDCertificateResponseCertificateTypeEnumUploaded GetCertificatesIDCertificateResponseCertificateTypeEnum = "uploaded"
GetCertificatesIDCertificateResponseCertificateTypeEnumManaged GetCertificatesIDCertificateResponseCertificateTypeEnum = "managed"
)


type GetCertificatesIDCertificateResponseCertificateUsedBy struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}

type GetCertificatesIDCertificateResponseCertificate struct {
    Certificate string `json:"certificate"`
    Created string `json:"created"`
    DomainNames []string `json:"domain_names"`
    Fingerprint string `json:"fingerprint"`
    ID int64 `json:"id"`
    Labels map[string]string `json:"labels"`
    Name string `json:"name"`
    NotValidAfter string `json:"not_valid_after"`
    NotValidBefore string `json:"not_valid_before"`
    Status *GetCertificatesIDCertificateResponseCertificateStatus `json:"status,omitempty"`
    Type *GetCertificatesIDCertificateResponseCertificateTypeEnum `json:"type,omitempty"`
    UsedBy []GetCertificatesIDCertificateResponseCertificateUsedBy `json:"used_by"`
    
}

type GetCertificatesIDCertificateResponse struct {
    Certificate GetCertificatesIDCertificateResponseCertificate `json:"certificate"`
    
}

type GetCertificatesIDResponse struct {
    CertificateResponse *GetCertificatesIDCertificateResponse 
    ContentType string 
    StatusCode int64 
    
}

