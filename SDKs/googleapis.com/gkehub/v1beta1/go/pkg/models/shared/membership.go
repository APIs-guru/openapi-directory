package shared

type MembershipInfrastructureTypeEnum string

const (
	MembershipInfrastructureTypeEnumInfrastructureTypeUnspecified MembershipInfrastructureTypeEnum = "INFRASTRUCTURE_TYPE_UNSPECIFIED"
	MembershipInfrastructureTypeEnumOnPrem                        MembershipInfrastructureTypeEnum = "ON_PREM"
	MembershipInfrastructureTypeEnumMultiCloud                    MembershipInfrastructureTypeEnum = "MULTI_CLOUD"
)

// MembershipInput
// Membership contains information about a member cluster.
type MembershipInput struct {
	Authority          *AuthorityInput                   `json:"authority,omitempty"`
	Description        *string                           `json:"description,omitempty"`
	Endpoint           *MembershipEndpointInput          `json:"endpoint,omitempty"`
	ExternalID         *string                           `json:"externalId,omitempty"`
	InfrastructureType *MembershipInfrastructureTypeEnum `json:"infrastructureType,omitempty"`
	Labels             map[string]string                 `json:"labels,omitempty"`
	State              *MembershipStateInput             `json:"state,omitempty"`
}

// Membership
// Membership contains information about a member cluster.
type Membership struct {
	Authority          *Authority                        `json:"authority,omitempty"`
	CreateTime         *string                           `json:"createTime,omitempty"`
	DeleteTime         *string                           `json:"deleteTime,omitempty"`
	Description        *string                           `json:"description,omitempty"`
	Endpoint           *MembershipEndpoint               `json:"endpoint,omitempty"`
	ExternalID         *string                           `json:"externalId,omitempty"`
	InfrastructureType *MembershipInfrastructureTypeEnum `json:"infrastructureType,omitempty"`
	Labels             map[string]string                 `json:"labels,omitempty"`
	LastConnectionTime *string                           `json:"lastConnectionTime,omitempty"`
	Name               *string                           `json:"name,omitempty"`
	State              *MembershipState                  `json:"state,omitempty"`
	UniqueID           *string                           `json:"uniqueId,omitempty"`
	UpdateTime         *string                           `json:"updateTime,omitempty"`
}
