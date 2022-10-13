package shared

type UndeleteWebAppRequest struct {
	Etag         *string `json:"etag"`
	ValidateOnly *bool   `json:"validateOnly"`
}
