package shared

type ThirdPartyLinkListResponse struct {
	Etag  *string          `json:"etag"`
	Items []ThirdPartyLink `json:"items"`
	Kind  *string          `json:"kind"`
}
