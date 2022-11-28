import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportsConfiguration } from "./reportsconfiguration";


export enum AccountAccountProfileEnum {
    AccountProfileBasic = "ACCOUNT_PROFILE_BASIC",
    AccountProfileStandard = "ACCOUNT_PROFILE_STANDARD"
}

export enum AccountActiveAdsLimitTierEnum {
    ActiveAdsTier40K = "ACTIVE_ADS_TIER_40K",
    ActiveAdsTier75K = "ACTIVE_ADS_TIER_75K",
    ActiveAdsTier100K = "ACTIVE_ADS_TIER_100K",
    ActiveAdsTier200K = "ACTIVE_ADS_TIER_200K",
    ActiveAdsTier300K = "ACTIVE_ADS_TIER_300K",
    ActiveAdsTier500K = "ACTIVE_ADS_TIER_500K",
    ActiveAdsTier750K = "ACTIVE_ADS_TIER_750K",
    ActiveAdsTier1M = "ACTIVE_ADS_TIER_1M"
}


// Account
/** 
 * Contains properties of a Campaign Manager account.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountPermissionIds" })
  accountPermissionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=accountProfile" })
  accountProfile?: AccountAccountProfileEnum;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=activeAdsLimitTier" })
  activeAdsLimitTier?: AccountActiveAdsLimitTierEnum;

  @SpeakeasyMetadata({ data: "json, name=activeViewOptOut" })
  activeViewOptOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=availablePermissionIds" })
  availablePermissionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=countryId" })
  countryId?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyId" })
  currencyId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultCreativeSizeId" })
  defaultCreativeSizeId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=maximumImageSize" })
  maximumImageSize?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nielsenOcrEnabled" })
  nielsenOcrEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reportsConfiguration" })
  reportsConfiguration?: ReportsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=shareReportsWithTwitter" })
  shareReportsWithTwitter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=teaserSizeLimit" })
  teaserSizeLimit?: string;
}
