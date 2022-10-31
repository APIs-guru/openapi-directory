package shared

type SearchRangeRequest struct {
	IPPrefixLength *int32  `json:"ipPrefixLength,omitempty"`
	Network        *string `json:"network,omitempty"`
}
