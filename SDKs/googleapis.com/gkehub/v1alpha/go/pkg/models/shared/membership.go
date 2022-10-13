package shared

type Membership struct {
	Authority          *Authority          `json:"authority"`
	CreateTime         *string             `json:"createTime"`
	DeleteTime         *string             `json:"deleteTime"`
	Description        *string             `json:"description"`
	Endpoint           *MembershipEndpoint `json:"endpoint"`
	ExternalID         *string             `json:"externalId"`
	Labels             map[string]string   `json:"labels"`
	LastConnectionTime *string             `json:"lastConnectionTime"`
	Name               *string             `json:"name"`
	State              *MembershipState    `json:"state"`
	UniqueID           *string             `json:"uniqueId"`
	UpdateTime         *string             `json:"updateTime"`
}
