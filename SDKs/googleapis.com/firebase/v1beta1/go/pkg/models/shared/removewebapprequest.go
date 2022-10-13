package shared

type RemoveWebAppRequest struct {
	AllowMissing *bool   `json:"allowMissing"`
	Etag         *string `json:"etag"`
	Immediate    *bool   `json:"immediate"`
	ValidateOnly *bool   `json:"validateOnly"`
}
