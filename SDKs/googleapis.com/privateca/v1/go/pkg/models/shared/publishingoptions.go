package shared

type PublishingOptions struct {
	PublishCaCert *bool `json:"publishCaCert"`
	PublishCrl    *bool `json:"publishCrl"`
}
