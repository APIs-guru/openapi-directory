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
	AccountPermissionIds    []string                       `json:"accountPermissionIds,omitempty"`
	AccountProfile          *AccountAccountProfileEnum     `json:"accountProfile,omitempty"`
	Active                  *bool                          `json:"active,omitempty"`
	ActiveAdsLimitTier      *AccountActiveAdsLimitTierEnum `json:"activeAdsLimitTier,omitempty"`
	ActiveViewOptOut        *bool                          `json:"activeViewOptOut,omitempty"`
	AvailablePermissionIds  []string                       `json:"availablePermissionIds,omitempty"`
	CountryID               *string                        `json:"countryId,omitempty"`
	CurrencyID              *string                        `json:"currencyId,omitempty"`
	DefaultCreativeSizeID   *string                        `json:"defaultCreativeSizeId,omitempty"`
	Description             *string                        `json:"description,omitempty"`
	ID                      *string                        `json:"id,omitempty"`
	Kind                    *string                        `json:"kind,omitempty"`
	Locale                  *string                        `json:"locale,omitempty"`
	MaximumImageSize        *string                        `json:"maximumImageSize,omitempty"`
	Name                    *string                        `json:"name,omitempty"`
	NielsenOcrEnabled       *bool                          `json:"nielsenOcrEnabled,omitempty"`
	ReportsConfiguration    *ReportsConfiguration          `json:"reportsConfiguration,omitempty"`
	ShareReportsWithTwitter *bool                          `json:"shareReportsWithTwitter,omitempty"`
	TeaserSizeLimit         *string                        `json:"teaserSizeLimit,omitempty"`
}
