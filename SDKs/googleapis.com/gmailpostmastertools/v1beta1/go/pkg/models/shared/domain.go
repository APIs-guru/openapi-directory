package shared

type DomainPermissionEnum string

const (
	DomainPermissionEnumPermissionUnspecified DomainPermissionEnum = "PERMISSION_UNSPECIFIED"
	DomainPermissionEnumOwner                 DomainPermissionEnum = "OWNER"
	DomainPermissionEnumReader                DomainPermissionEnum = "READER"
	DomainPermissionEnumNone                  DomainPermissionEnum = "NONE"
)

type Domain struct {
	CreateTime *string               `json:"createTime"`
	Name       *string               `json:"name"`
	Permission *DomainPermissionEnum `json:"permission"`
}
