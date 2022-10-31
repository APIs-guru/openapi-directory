package shared



type GoogleCloudRetailV2alphaMerchantCenterLink struct {
    BranchID *string `json:"branchId,omitempty"`
    Destinations []string `json:"destinations,omitempty"`
    Feeds []GoogleCloudRetailV2alphaMerchantCenterFeedFilter `json:"feeds,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    MerchantCenterAccountID *string `json:"merchantCenterAccountId,omitempty"`
    RegionCode *string `json:"regionCode,omitempty"`
    
}

