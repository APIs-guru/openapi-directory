package shared

type TrustStateEnum string

const (
	TrustStateEnumStateUnspecified TrustStateEnum = "STATE_UNSPECIFIED"
	TrustStateEnumCreating         TrustStateEnum = "CREATING"
	TrustStateEnumUpdating         TrustStateEnum = "UPDATING"
	TrustStateEnumDeleting         TrustStateEnum = "DELETING"
	TrustStateEnumConnected        TrustStateEnum = "CONNECTED"
	TrustStateEnumDisconnected     TrustStateEnum = "DISCONNECTED"
)

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

// Trust
// Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
type Trust struct {
	CreateTime                           *string                  `json:"createTime,omitempty"`
	LastKnownTrustConnectedHeartbeatTime *string                  `json:"lastKnownTrustConnectedHeartbeatTime,omitempty"`
	SelectiveAuthentication              *bool                    `json:"selectiveAuthentication,omitempty"`
	State                                *TrustStateEnum          `json:"state,omitempty"`
	StateDescription                     *string                  `json:"stateDescription,omitempty"`
	TargetDNSIPAddresses                 []string                 `json:"targetDnsIpAddresses,omitempty"`
	TargetDomainName                     *string                  `json:"targetDomainName,omitempty"`
	TrustDirection                       *TrustTrustDirectionEnum `json:"trustDirection,omitempty"`
	TrustHandshakeSecret                 *string                  `json:"trustHandshakeSecret,omitempty"`
	TrustType                            *TrustTrustTypeEnum      `json:"trustType,omitempty"`
	UpdateTime                           *string                  `json:"updateTime,omitempty"`
}
