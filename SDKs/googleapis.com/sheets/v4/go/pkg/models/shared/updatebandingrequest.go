package shared

type UpdateBandingRequest struct {
	BandedRange *BandedRange `json:"bandedRange"`
	Fields      *string      `json:"fields"`
}
