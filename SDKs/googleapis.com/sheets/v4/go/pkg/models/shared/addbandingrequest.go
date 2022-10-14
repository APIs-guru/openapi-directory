package shared

type AddBandingRequest struct {
	BandedRange *BandedRange `json:"bandedRange,omitempty"`
}
