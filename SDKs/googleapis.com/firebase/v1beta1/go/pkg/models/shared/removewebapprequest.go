package shared

type RemoveWebAppRequest struct {
	AllowMissing *bool   `json:"allowMissing,omitempty"`
	Etag         *string `json:"etag,omitempty"`
	Immediate    *bool   `json:"immediate,omitempty"`
	ValidateOnly *bool   `json:"validateOnly,omitempty"`
}
