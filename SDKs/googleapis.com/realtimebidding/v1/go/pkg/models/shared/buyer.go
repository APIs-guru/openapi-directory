package shared

// Buyer
// RTB Buyer account information.
type Buyer struct {
	ActiveCreativeCount        *string  `json:"activeCreativeCount,omitempty"`
	Bidder                     *string  `json:"bidder,omitempty"`
	BillingIds                 []string `json:"billingIds,omitempty"`
	DisplayName                *string  `json:"displayName,omitempty"`
	MaximumActiveCreativeCount *string  `json:"maximumActiveCreativeCount,omitempty"`
	Name                       *string  `json:"name,omitempty"`
}
