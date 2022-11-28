package shared

type GatewayAPIConfigChannelEnum string

const (
	GatewayAPIConfigChannelEnumChannelUnspecified  GatewayAPIConfigChannelEnum = "CHANNEL_UNSPECIFIED"
	GatewayAPIConfigChannelEnumChannelDisabled     GatewayAPIConfigChannelEnum = "CHANNEL_DISABLED"
	GatewayAPIConfigChannelEnumChannelExperimental GatewayAPIConfigChannelEnum = "CHANNEL_EXPERIMENTAL"
	GatewayAPIConfigChannelEnumChannelStandard     GatewayAPIConfigChannelEnum = "CHANNEL_STANDARD"
)

// GatewayAPIConfig
// GatewayAPIConfig contains the desired config of Gateway API on this cluster.
type GatewayAPIConfig struct {
	Channel *GatewayAPIConfigChannelEnum `json:"channel,omitempty"`
}
