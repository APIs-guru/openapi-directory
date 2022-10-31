package shared




type TrustStateEnum string

const (
    TrustStateEnumStateUnspecified TrustStateEnum = "STATE_UNSPECIFIED"
TrustStateEnumCreating TrustStateEnum = "CREATING"
TrustStateEnumUpdating TrustStateEnum = "UPDATING"
TrustStateEnumDeleting TrustStateEnum = "DELETING"
TrustStateEnumConnected TrustStateEnum = "CONNECTED"
TrustStateEnumDisconnected TrustStateEnum = "DISCONNECTED"
)



type TrustTrustDirectionEnum string

const (
    TrustTrustDirectionEnumTrustDirectionUnspecified TrustTrustDirectionEnum = "TRUST_DIRECTION_UNSPECIFIED"
TrustTrustDirectionEnumInbound TrustTrustDirectionEnum = "INBOUND"
TrustTrustDirectionEnumOutbound TrustTrustDirectionEnum = "OUTBOUND"
TrustTrustDirectionEnumBidirectional TrustTrustDirectionEnum = "BIDIRECTIONAL"
)



type TrustTrustTypeEnum string

const (
    TrustTrustTypeEnumTrustTypeUnspecified TrustTrustTypeEnum = "TRUST_TYPE_UNSPECIFIED"
TrustTrustTypeEnumForest TrustTrustTypeEnum = "FOREST"
TrustTrustTypeEnumExternal TrustTrustTypeEnum = "EXTERNAL"
)


type Trust struct {
    CreateTime *string `json:"createTime,omitempty"`
    LastKnownTrustConnectedHeartbeatTime *string `json:"lastKnownTrustConnectedHeartbeatTime,omitempty"`
    SelectiveAuthentication *bool `json:"selectiveAuthentication,omitempty"`
    State *TrustStateEnum `json:"state,omitempty"`
    StateDescription *string `json:"stateDescription,omitempty"`
    TargetDNSIPAddresses []string `json:"targetDnsIpAddresses,omitempty"`
    TargetDomainName *string `json:"targetDomainName,omitempty"`
    TrustDirection *TrustTrustDirectionEnum `json:"trustDirection,omitempty"`
    TrustHandshakeSecret *string `json:"trustHandshakeSecret,omitempty"`
    TrustType *TrustTrustTypeEnum `json:"trustType,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

