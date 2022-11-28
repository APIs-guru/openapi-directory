package shared

type ReleaseChannelChannelEnum string

const (
	ReleaseChannelChannelEnumUnspecified ReleaseChannelChannelEnum = "UNSPECIFIED"
	ReleaseChannelChannelEnumRapid       ReleaseChannelChannelEnum = "RAPID"
	ReleaseChannelChannelEnumRegular     ReleaseChannelChannelEnum = "REGULAR"
	ReleaseChannelChannelEnumStable      ReleaseChannelChannelEnum = "STABLE"
)

// ReleaseChannel
// ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.
type ReleaseChannel struct {
	Channel *ReleaseChannelChannelEnum `json:"channel,omitempty"`
}
