package shared

type GoogleCloudRetailV2alphaMerchantCenterLink struct {
	BranchID                *string                                            `json:"branchId"`
	Destinations            []string                                           `json:"destinations"`
	Feeds                   []GoogleCloudRetailV2alphaMerchantCenterFeedFilter `json:"feeds"`
	LanguageCode            *string                                            `json:"languageCode"`
	MerchantCenterAccountID *string                                            `json:"merchantCenterAccountId"`
	RegionCode              *string                                            `json:"regionCode"`
}
