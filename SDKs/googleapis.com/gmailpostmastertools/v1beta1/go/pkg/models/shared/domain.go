package shared

type DomainPermissionEnum string

const (
	DomainPermissionEnumPermissionUnspecified DomainPermissionEnum = "PERMISSION_UNSPECIFIED"
	DomainPermissionEnumOwner                 DomainPermissionEnum = "OWNER"
	DomainPermissionEnumReader                DomainPermissionEnum = "READER"
	DomainPermissionEnumNone                  DomainPermissionEnum = "NONE"
)

type Domain struct {
	CreateTime *string               `json:"createTime,omitempty"`
	Name       *string               `json:"name,omitempty"`
	Permission *DomainPermissionEnum `json:"permission,omitempty"`
}
