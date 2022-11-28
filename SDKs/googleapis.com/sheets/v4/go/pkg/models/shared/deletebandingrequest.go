package shared

// DeleteBandingRequest
// Removes the banded range with the given ID from the spreadsheet.
type DeleteBandingRequest struct {
	BandedRangeID *int32 `json:"bandedRangeId,omitempty"`
}
