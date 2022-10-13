package shared

type GoogleCloudRetailV2betaMerchantCenterLink struct {
	BranchID                *string                                           `json:"branchId"`
	Destinations            []string                                          `json:"destinations"`
	Feeds                   []GoogleCloudRetailV2betaMerchantCenterFeedFilter `json:"feeds"`
	LanguageCode            *string                                           `json:"languageCode"`
	MerchantCenterAccountID *string                                           `json:"merchantCenterAccountId"`
	RegionCode              *string                                           `json:"regionCode"`
}
