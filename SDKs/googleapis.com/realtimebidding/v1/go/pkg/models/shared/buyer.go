package shared

type Buyer struct {
	ActiveCreativeCount        *string  `json:"activeCreativeCount"`
	Bidder                     *string  `json:"bidder"`
	BillingIds                 []string `json:"billingIds"`
	DisplayName                *string  `json:"displayName"`
	MaximumActiveCreativeCount *string  `json:"maximumActiveCreativeCount"`
	Name                       *string  `json:"name"`
}
