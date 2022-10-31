package shared

type SasPortalDeviceGrantChannelTypeEnum string

const (
	SasPortalDeviceGrantChannelTypeEnumChannelTypeUnspecified SasPortalDeviceGrantChannelTypeEnum = "CHANNEL_TYPE_UNSPECIFIED"
	SasPortalDeviceGrantChannelTypeEnumChannelTypeGaa         SasPortalDeviceGrantChannelTypeEnum = "CHANNEL_TYPE_GAA"
	SasPortalDeviceGrantChannelTypeEnumChannelTypePal         SasPortalDeviceGrantChannelTypeEnum = "CHANNEL_TYPE_PAL"
)

type SasPortalDeviceGrantStateEnum string

const (
	SasPortalDeviceGrantStateEnumGrantStateUnspecified SasPortalDeviceGrantStateEnum = "GRANT_STATE_UNSPECIFIED"
	SasPortalDeviceGrantStateEnumGrantStateGranted     SasPortalDeviceGrantStateEnum = "GRANT_STATE_GRANTED"
	SasPortalDeviceGrantStateEnumGrantStateTerminated  SasPortalDeviceGrantStateEnum = "GRANT_STATE_TERMINATED"
	SasPortalDeviceGrantStateEnumGrantStateSuspended   SasPortalDeviceGrantStateEnum = "GRANT_STATE_SUSPENDED"
	SasPortalDeviceGrantStateEnumGrantStateAuthorized  SasPortalDeviceGrantStateEnum = "GRANT_STATE_AUTHORIZED"
	SasPortalDeviceGrantStateEnumGrantStateExpired     SasPortalDeviceGrantStateEnum = "GRANT_STATE_EXPIRED"
)

type SasPortalDeviceGrant struct {
	ChannelType                     *SasPortalDeviceGrantChannelTypeEnum `json:"channelType,omitempty"`
	ExpireTime                      *string                              `json:"expireTime,omitempty"`
	FrequencyRange                  *SasPortalFrequencyRange             `json:"frequencyRange,omitempty"`
	GrantID                         *string                              `json:"grantId,omitempty"`
	LastHeartbeatTransmitExpireTime *string                              `json:"lastHeartbeatTransmitExpireTime,omitempty"`
	MaxEirp                         *float64                             `json:"maxEirp,omitempty"`
	MoveList                        []SasPortalDpaMoveList               `json:"moveList,omitempty"`
	State                           *SasPortalDeviceGrantStateEnum       `json:"state,omitempty"`
	SuspensionReason                []string                             `json:"suspensionReason,omitempty"`
}
