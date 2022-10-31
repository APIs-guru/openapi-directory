package shared

type SasPortalDeviceStateEnum string

const (
	SasPortalDeviceStateEnumDeviceStateUnspecified SasPortalDeviceStateEnum = "DEVICE_STATE_UNSPECIFIED"
	SasPortalDeviceStateEnumReserved               SasPortalDeviceStateEnum = "RESERVED"
	SasPortalDeviceStateEnumRegistered             SasPortalDeviceStateEnum = "REGISTERED"
	SasPortalDeviceStateEnumDeregistered           SasPortalDeviceStateEnum = "DEREGISTERED"
)

type SasPortalDevice struct {
	ActiveConfig         *SasPortalDeviceConfig      `json:"activeConfig,omitempty"`
	CurrentChannels      []SasPortalChannelWithScore `json:"currentChannels,omitempty"`
	DeviceMetadata       *SasPortalDeviceMetadata    `json:"deviceMetadata,omitempty"`
	DisplayName          *string                     `json:"displayName,omitempty"`
	FccID                *string                     `json:"fccId,omitempty"`
	GrantRangeAllowlists []SasPortalFrequencyRange   `json:"grantRangeAllowlists,omitempty"`
	Grants               []SasPortalDeviceGrant      `json:"grants,omitempty"`
	Name                 *string                     `json:"name,omitempty"`
	PreloadedConfig      *SasPortalDeviceConfig      `json:"preloadedConfig,omitempty"`
	SerialNumber         *string                     `json:"serialNumber,omitempty"`
	State                *SasPortalDeviceStateEnum   `json:"state,omitempty"`
}
