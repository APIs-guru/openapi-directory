package shared

type ReleaseChannelConfigChannelEnum string

const (
	ReleaseChannelConfigChannelEnumUnspecified ReleaseChannelConfigChannelEnum = "UNSPECIFIED"
	ReleaseChannelConfigChannelEnumRapid       ReleaseChannelConfigChannelEnum = "RAPID"
	ReleaseChannelConfigChannelEnumRegular     ReleaseChannelConfigChannelEnum = "REGULAR"
	ReleaseChannelConfigChannelEnumStable      ReleaseChannelConfigChannelEnum = "STABLE"
)

type ReleaseChannelConfig struct {
	AvailableVersions []AvailableVersion               `json:"availableVersions,omitempty"`
	Channel           *ReleaseChannelConfigChannelEnum `json:"channel,omitempty"`
	DefaultVersion    *string                          `json:"defaultVersion,omitempty"`
	ValidVersions     []string                         `json:"validVersions,omitempty"`
}
