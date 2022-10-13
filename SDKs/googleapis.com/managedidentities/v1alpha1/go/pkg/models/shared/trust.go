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

type Trust struct {
	CreateTime                           *string                  `json:"createTime"`
	LastKnownTrustConnectedHeartbeatTime *string                  `json:"lastKnownTrustConnectedHeartbeatTime"`
	SelectiveAuthentication              *bool                    `json:"selectiveAuthentication"`
	State                                *TrustStateEnum          `json:"state"`
	StateDescription                     *string                  `json:"stateDescription"`
	TargetDNSIPAddresses                 []string                 `json:"targetDnsIpAddresses"`
	TargetDomainName                     *string                  `json:"targetDomainName"`
	TrustDirection                       *TrustTrustDirectionEnum `json:"trustDirection"`
	TrustHandshakeSecret                 *string                  `json:"trustHandshakeSecret"`
	TrustType                            *TrustTrustTypeEnum      `json:"trustType"`
	UpdateTime                           *string                  `json:"updateTime"`
}
