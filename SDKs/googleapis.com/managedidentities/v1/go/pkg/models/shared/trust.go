package shared

type TrustTrustDirectionEnum string

const (
	TrustTrustDirectionEnumTrustDirectionUnspecified TrustTrustDirectionEnum = "TRUST_DIRECTION_UNSPECIFIED"
	TrustTrustDirectionEnumInbound                   TrustTrustDirectionEnum = "INBOUND"
	TrustTrustDirectionEnumOutbound                  TrustTrustDirectionEnum = "OUTBOUND"
	TrustTrustDirectionEnumBidirectional             TrustTrustDirectionEnum = "BIDIRECTIONAL"
)

type TrustTrustTypeEnum string

const (
	TrustTrustTypeEnumTrustTypeUnspecified TrustTrustTypeEnum = "TRUST_TYPE_UNSPECIFIED"
	TrustTrustTypeEnumForest               TrustTrustTypeEnum = "FOREST"
	TrustTrustTypeEnumExternal             TrustTrustTypeEnum = "EXTERNAL"
)

type TrustStateEnum string

const (
	TrustStateEnumStateUnspecified TrustStateEnum = "STATE_UNSPECIFIED"
	TrustStateEnumCreating         TrustStateEnum = "CREATING"
	TrustStateEnumUpdating         TrustStateEnum = "UPDATING"
	TrustStateEnumDeleting         TrustStateEnum = "DELETING"
	TrustStateEnumConnected        TrustStateEnum = "CONNECTED"
	TrustStateEnumDisconnected     TrustStateEnum = "DISCONNECTED"
)

// TrustInput
// Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain. If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
type TrustInput struct {
	SelectiveAuthentication *bool                    `json:"selectiveAuthentication,omitempty"`
	TargetDNSIPAddresses    []string                 `json:"targetDnsIpAddresses,omitempty"`
	TargetDomainName        *string                  `json:"targetDomainName,omitempty"`
	TrustDirection          *TrustTrustDirectionEnum `json:"trustDirection,omitempty"`
	TrustHandshakeSecret    *string                  `json:"trustHandshakeSecret,omitempty"`
	TrustType               *TrustTrustTypeEnum      `json:"trustType,omitempty"`
}

// Trust
// Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain. If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
type Trust struct {
	CreateTime              *string                  `json:"createTime,omitempty"`
	LastTrustHeartbeatTime  *string                  `json:"lastTrustHeartbeatTime,omitempty"`
	SelectiveAuthentication *bool                    `json:"selectiveAuthentication,omitempty"`
	State                   *TrustStateEnum          `json:"state,omitempty"`
	StateDescription        *string                  `json:"stateDescription,omitempty"`
	TargetDNSIPAddresses    []string                 `json:"targetDnsIpAddresses,omitempty"`
	TargetDomainName        *string                  `json:"targetDomainName,omitempty"`
	TrustDirection          *TrustTrustDirectionEnum `json:"trustDirection,omitempty"`
	TrustHandshakeSecret    *string                  `json:"trustHandshakeSecret,omitempty"`
	TrustType               *TrustTrustTypeEnum      `json:"trustType,omitempty"`
	UpdateTime              *string                  `json:"updateTime,omitempty"`
}
