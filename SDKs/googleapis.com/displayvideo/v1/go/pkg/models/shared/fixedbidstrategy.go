package shared

// FixedBidStrategy
// A strategy that uses a fixed bidding price.
type FixedBidStrategy struct {
	BidAmountMicros *string `json:"bidAmountMicros,omitempty"`
}
