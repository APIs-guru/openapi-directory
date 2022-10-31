package shared

type UndeleteWebAppRequest struct {
	Etag         *string `json:"etag,omitempty"`
	ValidateOnly *bool   `json:"validateOnly,omitempty"`
}
