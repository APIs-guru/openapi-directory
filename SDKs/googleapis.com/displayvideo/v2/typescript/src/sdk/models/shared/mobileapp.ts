import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MobileAppPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Ios = "IOS",
    Android = "ANDROID"
}


// MobileApp
/** 
 * A mobile app promoted by a mobile app install line item.
**/
export class MobileApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: MobileAppPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;
}


// MobileAppInput
/** 
 * A mobile app promoted by a mobile app install line item.
**/
export class MobileAppInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
