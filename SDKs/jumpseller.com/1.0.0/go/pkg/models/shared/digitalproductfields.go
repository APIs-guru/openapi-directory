package shared

type DigitalProductFields struct {
	ExpirationSeconds *int32  `json:"expiration_seconds,omitempty"`
	ID                *int32  `json:"id,omitempty"`
	URL               *string `json:"url,omitempty"`
}
