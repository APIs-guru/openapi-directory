package shared

type ReleaseChannelConfigChannelEnum string

const (
	ReleaseChannelConfigChannelEnumUnspecified ReleaseChannelConfigChannelEnum = "UNSPECIFIED"
	ReleaseChannelConfigChannelEnumRapid       ReleaseChannelConfigChannelEnum = "RAPID"
	ReleaseChannelConfigChannelEnumRegular     ReleaseChannelConfigChannelEnum = "REGULAR"
	ReleaseChannelConfigChannelEnumStable      ReleaseChannelConfigChannelEnum = "STABLE"
)

type ReleaseChannelConfig struct {
	AvailableVersions []AvailableVersion               `json:"availableVersions"`
	Channel           *ReleaseChannelConfigChannelEnum `json:"channel"`
	DefaultVersion    *string                          `json:"defaultVersion"`
	ValidVersions     []string                         `json:"validVersions"`
}
