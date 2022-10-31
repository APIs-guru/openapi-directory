package shared

type PublishingOptions struct {
	PublishCaCert *bool `json:"publishCaCert,omitempty"`
	PublishCrl    *bool `json:"publishCrl,omitempty"`
}
