package shared

type AccountAccountProfileEnum string

const (
	AccountAccountProfileEnumAccountProfileBasic    AccountAccountProfileEnum = "ACCOUNT_PROFILE_BASIC"
	AccountAccountProfileEnumAccountProfileStandard AccountAccountProfileEnum = "ACCOUNT_PROFILE_STANDARD"
)

type AccountActiveAdsLimitTierEnum string

const (
	AccountActiveAdsLimitTierEnumActiveAdsTier40K  AccountActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_40K"
	AccountActiveAdsLimitTierEnumActiveAdsTier75K  AccountActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_75K"
	AccountActiveAdsLimitTierEnumActiveAdsTier100K AccountActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_100K"
	AccountActiveAdsLimitTierEnumActiveAdsTier200K AccountActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_200K"
	AccountActiveAdsLimitTierEnumActiveAdsTier300K AccountActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_300K"
	AccountActiveAdsLimitTierEnumActiveAdsTier500K AccountActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_500K"
	AccountActiveAdsLimitTierEnumActiveAdsTier750K AccountActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_750K"
	AccountActiveAdsLimitTierEnumActiveAdsTier1M   AccountActiveAdsLimitTierEnum = "ACTIVE_ADS_TIER_1M"
)

type Account struct {
	AccountPermissionIds    []string                       `json:"accountPermissionIds"`
	AccountProfile          *AccountAccountProfileEnum     `json:"accountProfile"`
	Active                  *bool                          `json:"active"`
	ActiveAdsLimitTier      *AccountActiveAdsLimitTierEnum `json:"activeAdsLimitTier"`
	ActiveViewOptOut        *bool                          `json:"activeViewOptOut"`
	AvailablePermissionIds  []string                       `json:"availablePermissionIds"`
	CountryID               *string                        `json:"countryId"`
	CurrencyID              *string                        `json:"currencyId"`
	DefaultCreativeSizeID   *string                        `json:"defaultCreativeSizeId"`
	Description             *string                        `json:"description"`
	ID                      *string                        `json:"id"`
	Kind                    *string                        `json:"kind"`
	Locale                  *string                        `json:"locale"`
	MaximumImageSize        *string                        `json:"maximumImageSize"`
	Name                    *string                        `json:"name"`
	NielsenOcrEnabled       *bool                          `json:"nielsenOcrEnabled"`
	ReportsConfiguration    *ReportsConfiguration          `json:"reportsConfiguration"`
	ShareReportsWithTwitter *bool                          `json:"shareReportsWithTwitter"`
	TeaserSizeLimit         *string                        `json:"teaserSizeLimit"`
}
