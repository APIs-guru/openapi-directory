import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountActiveAdSummaryActiveAdsLimitTierEnum {
    ActiveAdsTier40K = "ACTIVE_ADS_TIER_40K"
,    ActiveAdsTier75K = "ACTIVE_ADS_TIER_75K"
,    ActiveAdsTier100K = "ACTIVE_ADS_TIER_100K"
,    ActiveAdsTier200K = "ACTIVE_ADS_TIER_200K"
,    ActiveAdsTier300K = "ACTIVE_ADS_TIER_300K"
,    ActiveAdsTier500K = "ACTIVE_ADS_TIER_500K"
,    ActiveAdsTier750K = "ACTIVE_ADS_TIER_750K"
,    ActiveAdsTier1M = "ACTIVE_ADS_TIER_1M"
}


// AccountActiveAdSummary
/** 
 * Gets a summary of active ads in an account.
**/
export class AccountActiveAdSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=activeAds" })
  activeAds?: string;

  @Metadata({ data: "json, name=activeAdsLimitTier" })
  activeAdsLimitTier?: AccountActiveAdSummaryActiveAdsLimitTierEnum;

  @Metadata({ data: "json, name=availableAds" })
  availableAds?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
