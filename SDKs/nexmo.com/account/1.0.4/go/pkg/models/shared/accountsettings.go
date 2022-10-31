package shared



type AccountSettings struct {
    DrCallbackURL *string `json:"dr-callback-url,omitempty"`
    MaxCallsPerSecond *int64 `json:"max-calls-per-second,omitempty"`
    MaxInboundRequest *int64 `json:"max-inbound-request,omitempty"`
    MaxOutboundRequest *int64 `json:"max-outbound-request,omitempty"`
    MoCallbackURL *string `json:"mo-callback-url,omitempty"`
    
}

