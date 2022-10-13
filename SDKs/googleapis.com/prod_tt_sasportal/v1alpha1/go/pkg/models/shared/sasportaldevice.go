package shared

type SasPortalDeviceStateEnum string

const (
	SasPortalDeviceStateEnumDeviceStateUnspecified SasPortalDeviceStateEnum = "DEVICE_STATE_UNSPECIFIED"
	SasPortalDeviceStateEnumReserved               SasPortalDeviceStateEnum = "RESERVED"
	SasPortalDeviceStateEnumRegistered             SasPortalDeviceStateEnum = "REGISTERED"
	SasPortalDeviceStateEnumDeregistered           SasPortalDeviceStateEnum = "DEREGISTERED"
)

type SasPortalDevice struct {
	ActiveConfig         *SasPortalDeviceConfig      `json:"activeConfig"`
	CurrentChannels      []SasPortalChannelWithScore `json:"currentChannels"`
	DeviceMetadata       *SasPortalDeviceMetadata    `json:"deviceMetadata"`
	DisplayName          *string                     `json:"displayName"`
	FccID                *string                     `json:"fccId"`
	GrantRangeAllowlists []SasPortalFrequencyRange   `json:"grantRangeAllowlists"`
	Grants               []SasPortalDeviceGrant      `json:"grants"`
	Name                 *string                     `json:"name"`
	PreloadedConfig      *SasPortalDeviceConfig      `json:"preloadedConfig"`
	SerialNumber         *string                     `json:"serialNumber"`
	State                *SasPortalDeviceStateEnum   `json:"state"`
}
