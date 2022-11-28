package shared

// GoogleCloudRetailV2alphaMerchantCenterLink
// Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.
type GoogleCloudRetailV2alphaMerchantCenterLink struct {
	BranchID                *string                                            `json:"branchId,omitempty"`
	Destinations            []string                                           `json:"destinations,omitempty"`
	Feeds                   []GoogleCloudRetailV2alphaMerchantCenterFeedFilter `json:"feeds,omitempty"`
	LanguageCode            *string                                            `json:"languageCode,omitempty"`
	MerchantCenterAccountID *string                                            `json:"merchantCenterAccountId,omitempty"`
	RegionCode              *string                                            `json:"regionCode,omitempty"`
}
