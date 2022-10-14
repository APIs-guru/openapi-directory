package shared

type Bidder struct {
	BypassNonguaranteedDealsPretargeting *bool   `json:"bypassNonguaranteedDealsPretargeting,omitempty"`
	CookieMatchingNetworkID              *string `json:"cookieMatchingNetworkId,omitempty"`
	CookieMatchingURL                    *string `json:"cookieMatchingUrl,omitempty"`
	DealsBillingID                       *string `json:"dealsBillingId,omitempty"`
	Name                                 *string `json:"name,omitempty"`
}
