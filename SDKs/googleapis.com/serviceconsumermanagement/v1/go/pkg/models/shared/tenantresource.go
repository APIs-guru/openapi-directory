package shared




type TenantResourceStatusEnum string

const (
    TenantResourceStatusEnumStatusUnspecified TenantResourceStatusEnum = "STATUS_UNSPECIFIED"
TenantResourceStatusEnumPendingCreate TenantResourceStatusEnum = "PENDING_CREATE"
TenantResourceStatusEnumActive TenantResourceStatusEnum = "ACTIVE"
TenantResourceStatusEnumPendingDelete TenantResourceStatusEnum = "PENDING_DELETE"
TenantResourceStatusEnumFailed TenantResourceStatusEnum = "FAILED"
TenantResourceStatusEnumDeleted TenantResourceStatusEnum = "DELETED"
)


type TenantResource struct {
    Resource *string `json:"resource,omitempty"`
    Status *TenantResourceStatusEnum `json:"status,omitempty"`
    Tag *string `json:"tag,omitempty"`
    
}

