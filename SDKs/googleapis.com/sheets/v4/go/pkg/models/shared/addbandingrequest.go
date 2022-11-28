package shared

// AddBandingRequest
// Adds a new banded range to the spreadsheet.
type AddBandingRequest struct {
	BandedRange *BandedRange `json:"bandedRange,omitempty"`
}
