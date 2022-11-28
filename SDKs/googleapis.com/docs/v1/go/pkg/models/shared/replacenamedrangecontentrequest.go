package shared

// ReplaceNamedRangeContentRequest
// Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.
type ReplaceNamedRangeContentRequest struct {
	NamedRangeID   *string `json:"namedRangeId,omitempty"`
	NamedRangeName *string `json:"namedRangeName,omitempty"`
	Text           *string `json:"text,omitempty"`
}
