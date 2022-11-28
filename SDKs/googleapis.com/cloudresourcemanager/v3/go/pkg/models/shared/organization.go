package shared

type OrganizationStateEnum string

const (
	OrganizationStateEnumStateUnspecified OrganizationStateEnum = "STATE_UNSPECIFIED"
	OrganizationStateEnumActive           OrganizationStateEnum = "ACTIVE"
	OrganizationStateEnumDeleteRequested  OrganizationStateEnum = "DELETE_REQUESTED"
)

// Organization
// The root node in the resource hierarchy to which a particular entity's (a company, for example) resources belong.
type Organization struct {
	CreateTime          *string                `json:"createTime,omitempty"`
	DeleteTime          *string                `json:"deleteTime,omitempty"`
	DirectoryCustomerID *string                `json:"directoryCustomerId,omitempty"`
	DisplayName         *string                `json:"displayName,omitempty"`
	Etag                *string                `json:"etag,omitempty"`
	Name                *string                `json:"name,omitempty"`
	State               *OrganizationStateEnum `json:"state,omitempty"`
	UpdateTime          *string                `json:"updateTime,omitempty"`
}
