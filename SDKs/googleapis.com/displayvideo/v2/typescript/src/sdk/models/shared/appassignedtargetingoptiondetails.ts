import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppAssignedTargetingOptionDetailsAppPlatformEnum {
    AppPlatformUnspecified = "APP_PLATFORM_UNSPECIFIED",
    AppPlatformIos = "APP_PLATFORM_IOS",
    AppPlatformAndroid = "APP_PLATFORM_ANDROID",
    AppPlatformRoku = "APP_PLATFORM_ROKU",
    AppPlatformAmazonFiretv = "APP_PLATFORM_AMAZON_FIRETV",
    AppPlatformPlaystation = "APP_PLATFORM_PLAYSTATION",
    AppPlatformAppleTv = "APP_PLATFORM_APPLE_TV",
    AppPlatformXbox = "APP_PLATFORM_XBOX",
    AppPlatformSamsungTv = "APP_PLATFORM_SAMSUNG_TV",
    AppPlatformAndroidTv = "APP_PLATFORM_ANDROID_TV",
    AppPlatformGenericCtv = "APP_PLATFORM_GENERIC_CTV"
}


// AppAssignedTargetingOptionDetails
/** 
 * Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
**/
export class AppAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=appPlatform" })
  appPlatform?: AppAssignedTargetingOptionDetailsAppPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;
}


// AppAssignedTargetingOptionDetailsInput
/** 
 * Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
**/
export class AppAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=appPlatform" })
  appPlatform?: AppAssignedTargetingOptionDetailsAppPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;
}
