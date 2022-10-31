package shared

type ThirdPartyLinkListResponse struct {
	Etag  *string          `json:"etag,omitempty"`
	Items []ThirdPartyLink `json:"items,omitempty"`
	Kind  *string          `json:"kind,omitempty"`
}
