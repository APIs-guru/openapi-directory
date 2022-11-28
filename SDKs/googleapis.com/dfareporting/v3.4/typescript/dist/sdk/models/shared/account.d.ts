import { SpeakeasyBase } from "../../../internal/utils";
import { ReportsConfiguration } from "./reportsconfiguration";
export declare enum AccountAccountProfileEnum {
    AccountProfileBasic = "ACCOUNT_PROFILE_BASIC",
    AccountProfileStandard = "ACCOUNT_PROFILE_STANDARD"
}
export declare enum AccountActiveAdsLimitTierEnum {
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
 * Contains properties of a Campaign Manager account.
**/
export declare class Account extends SpeakeasyBase {
    accountPermissionIds?: string[];
    accountProfile?: AccountAccountProfileEnum;
    active?: boolean;
    activeAdsLimitTier?: AccountActiveAdsLimitTierEnum;
    activeViewOptOut?: boolean;
    availablePermissionIds?: string[];
    countryId?: string;
    currencyId?: string;
    defaultCreativeSizeId?: string;
    description?: string;
    id?: string;
    kind?: string;
    locale?: string;
    maximumImageSize?: string;
    name?: string;
    nielsenOcrEnabled?: boolean;
    reportsConfiguration?: ReportsConfiguration;
    shareReportsWithTwitter?: boolean;
    teaserSizeLimit?: string;
}
