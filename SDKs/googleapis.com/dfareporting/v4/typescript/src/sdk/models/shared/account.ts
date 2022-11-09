import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportsConfiguration } from "./reportsconfiguration";

export enum AccountAccountProfileEnum {
    AccountProfileBasic = "ACCOUNT_PROFILE_BASIC"
,    AccountProfileStandard = "ACCOUNT_PROFILE_STANDARD"
}

export enum AccountActiveAdsLimitTierEnum {
    ActiveAdsTier40K = "ACTIVE_ADS_TIER_40K"
,    ActiveAdsTier75K = "ACTIVE_ADS_TIER_75K"
,    ActiveAdsTier100K = "ACTIVE_ADS_TIER_100K"
,    ActiveAdsTier200K = "ACTIVE_ADS_TIER_200K"
,    ActiveAdsTier300K = "ACTIVE_ADS_TIER_300K"
,    ActiveAdsTier500K = "ACTIVE_ADS_TIER_500K"
,    ActiveAdsTier750K = "ACTIVE_ADS_TIER_750K"
,    ActiveAdsTier1M = "ACTIVE_ADS_TIER_1M"
}


// Account
/** 
 * Contains properties of a Campaign Manager account.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountPermissionIds" })
  accountPermissionIds?: string[];

  @Metadata({ data: "json, name=accountProfile" })
  accountProfile?: AccountAccountProfileEnum;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=activeAdsLimitTier" })
  activeAdsLimitTier?: AccountActiveAdsLimitTierEnum;

  @Metadata({ data: "json, name=activeViewOptOut" })
  activeViewOptOut?: boolean;

  @Metadata({ data: "json, name=availablePermissionIds" })
  availablePermissionIds?: string[];

  @Metadata({ data: "json, name=countryId" })
  countryId?: string;

  @Metadata({ data: "json, name=currencyId" })
  currencyId?: string;

  @Metadata({ data: "json, name=defaultCreativeSizeId" })
  defaultCreativeSizeId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=maximumImageSize" })
  maximumImageSize?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nielsenOcrEnabled" })
  nielsenOcrEnabled?: boolean;

  @Metadata({ data: "json, name=reportsConfiguration" })
  reportsConfiguration?: ReportsConfiguration;

  @Metadata({ data: "json, name=shareReportsWithTwitter" })
  shareReportsWithTwitter?: boolean;

  @Metadata({ data: "json, name=teaserSizeLimit" })
  teaserSizeLimit?: string;
}
