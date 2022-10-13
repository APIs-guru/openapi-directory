package shared

type AccountSettings struct {
	DrCallbackURL      *string `json:"dr-callback-url"`
	MaxCallsPerSecond  *int64  `json:"max-calls-per-second"`
	MaxInboundRequest  *int64  `json:"max-inbound-request"`
	MaxOutboundRequest *int64  `json:"max-outbound-request"`
	MoCallbackURL      *string `json:"mo-callback-url"`
}
