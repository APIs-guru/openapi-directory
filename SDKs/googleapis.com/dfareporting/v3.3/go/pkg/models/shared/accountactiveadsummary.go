package shared

type AccountActiveAdSummaryActiveAdsLimitTierEnum string

const (
	AccountActiveAdSummaryActiveAdsLimitTierEnumActiveAdsTier40K  AccountActiveAdSummaryActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_40K"
	AccountActiveAdSummaryActiveAdsLimitTierEnumActiveAdsTier75K  AccountActiveAdSummaryActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_75K"
	AccountActiveAdSummaryActiveAdsLimitTierEnumActiveAdsTier100K AccountActiveAdSummaryActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_100K"
	AccountActiveAdSummaryActiveAdsLimitTierEnumActiveAdsTier200K AccountActiveAdSummaryActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_200K"
	AccountActiveAdSummaryActiveAdsLimitTierEnumActiveAdsTier300K AccountActiveAdSummaryActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_300K"
	AccountActiveAdSummaryActiveAdsLimitTierEnumActiveAdsTier500K AccountActiveAdSummaryActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_500K"
	AccountActiveAdSummaryActiveAdsLimitTierEnumActiveAdsTier750K AccountActiveAdSummaryActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_750K"
	AccountActiveAdSummaryActiveAdsLimitTierEnumActiveAdsTier1M   AccountActiveAdSummaryActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_1M"
)

// AccountActiveAdSummary
// Gets a summary of active ads in an account.
type AccountActiveAdSummary struct {
	AccountID          *string                                       `json:"accountId,omitempty"`
	ActiveAds          *string                                       `json:"activeAds,omitempty"`
	ActiveAdsLimitTier *AccountActiveAdSummaryActiveAdsLimitTierEnum `json:"activeAdsLimitTier,omitempty"`
	AvailableAds       *string                                       `json:"availableAds,omitempty"`
	Kind               *string                                       `json:"kind,omitempty"`
}
