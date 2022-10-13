package shared

type OrganizationStateEnum string

const (
	OrganizationStateEnumStateUnspecified OrganizationStateEnum = "STATE_UNSPECIFIED"
	OrganizationStateEnumActive           OrganizationStateEnum = "ACTIVE"
	OrganizationStateEnumDeleteRequested  OrganizationStateEnum = "DELETE_REQUESTED"
)

type Organization struct {
	CreateTime          *string                `json:"createTime"`
	DeleteTime          *string                `json:"deleteTime"`
	DirectoryCustomerID *string                `json:"directoryCustomerId"`
	DisplayName         *string                `json:"displayName"`
	Etag                *string                `json:"etag"`
	Name                *string                `json:"name"`
	State               *OrganizationStateEnum `json:"state"`
	UpdateTime          *string                `json:"updateTime"`
}
