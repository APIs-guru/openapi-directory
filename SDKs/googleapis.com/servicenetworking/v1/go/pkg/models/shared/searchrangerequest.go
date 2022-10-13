package shared

type SearchRangeRequest struct {
	IPPrefixLength *int32  `json:"ipPrefixLength"`
	Network        *string `json:"network"`
}
