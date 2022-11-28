import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountActiveAdSummaryActiveAdsLimitTierEnum {
    ActiveAdsTier40K = "ACTIVE_ADS_TIER_40K",
    ActiveAdsTier75K = "ACTIVE_ADS_TIER_75K",
    ActiveAdsTier100K = "ACTIVE_ADS_TIER_100K",
    ActiveAdsTier200K = "ACTIVE_ADS_TIER_200K",
    ActiveAdsTier300K = "ACTIVE_ADS_TIER_300K",
    ActiveAdsTier500K = "ACTIVE_ADS_TIER_500K",
    ActiveAdsTier750K = "ACTIVE_ADS_TIER_750K",
    ActiveAdsTier1M = "ACTIVE_ADS_TIER_1M"
}
/**
 * Gets a summary of active ads in an account.
**/
export declare class AccountActiveAdSummary extends SpeakeasyBase {
    accountId?: string;
    activeAds?: string;
    activeAdsLimitTier?: AccountActiveAdSummaryActiveAdsLimitTierEnum;
    availableAds?: string;
    kind?: string;
}
