package shared



type GoogleCloudRetailV2betaMerchantCenterLink struct {
    BranchID *string `json:"branchId,omitempty"`
    Destinations []string `json:"destinations,omitempty"`
    Feeds []GoogleCloudRetailV2betaMerchantCenterFeedFilter `json:"feeds,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    MerchantCenterAccountID *string `json:"merchantCenterAccountId,omitempty"`
    RegionCode *string `json:"regionCode,omitempty"`
    
}

