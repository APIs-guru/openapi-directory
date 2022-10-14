package shared

type ReleaseChannelChannelEnum string

const (
	ReleaseChannelChannelEnumUnspecified ReleaseChannelChannelEnum = "UNSPECIFIED"
	ReleaseChannelChannelEnumRapid       ReleaseChannelChannelEnum = "RAPID"
	ReleaseChannelChannelEnumRegular     ReleaseChannelChannelEnum = "REGULAR"
	ReleaseChannelChannelEnumStable      ReleaseChannelChannelEnum = "STABLE"
)

type ReleaseChannel struct {
	Channel *ReleaseChannelChannelEnum `json:"channel,omitempty"`
}
