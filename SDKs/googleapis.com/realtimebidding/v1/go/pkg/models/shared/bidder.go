package shared

type Bidder struct {
	BypassNonguaranteedDealsPretargeting *bool   `json:"bypassNonguaranteedDealsPretargeting"`
	CookieMatchingNetworkID              *string `json:"cookieMatchingNetworkId"`
	CookieMatchingURL                    *string `json:"cookieMatchingUrl"`
	DealsBillingID                       *string `json:"dealsBillingId"`
	Name                                 *string `json:"name"`
}
