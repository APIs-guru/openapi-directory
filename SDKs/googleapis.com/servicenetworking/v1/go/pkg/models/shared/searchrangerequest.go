package shared

// SearchRangeRequest
// Request to search for an unused range within allocated ranges.
type SearchRangeRequest struct {
	IPPrefixLength *int32  `json:"ipPrefixLength,omitempty"`
	Network        *string `json:"network,omitempty"`
}
