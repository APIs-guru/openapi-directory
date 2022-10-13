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
	ChannelType                     *SasPortalDeviceGrantChannelTypeEnum `json:"channelType"`
	ExpireTime                      *string                              `json:"expireTime"`
	FrequencyRange                  *SasPortalFrequencyRange             `json:"frequencyRange"`
	GrantID                         *string                              `json:"grantId"`
	LastHeartbeatTransmitExpireTime *string                              `json:"lastHeartbeatTransmitExpireTime"`
	MaxEirp                         *float64                             `json:"maxEirp"`
	MoveList                        []SasPortalDpaMoveList               `json:"moveList"`
	State                           *SasPortalDeviceGrantStateEnum       `json:"state"`
	SuspensionReason                []string                             `json:"suspensionReason"`
}
