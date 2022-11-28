package shared

// UpdateBandingRequest
// Updates properties of the supplied banded range.
type UpdateBandingRequest struct {
	BandedRange *BandedRange `json:"bandedRange,omitempty"`
	Fields      *string      `json:"fields,omitempty"`
}
