package shared

// ListInternalRangesResponse
// Response for InternalRange.ListInternalRanges
type ListInternalRangesResponse struct {
	InternalRanges []InternalRange `json:"internalRanges,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	Unreachable    []string        `json:"unreachable,omitempty"`
}
