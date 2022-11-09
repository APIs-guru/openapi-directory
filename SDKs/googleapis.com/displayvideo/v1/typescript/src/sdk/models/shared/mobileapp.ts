import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MobileAppPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    Ios = "IOS"
,    Android = "ANDROID"
}


// MobileApp
/** 
 * A mobile app promoted by a mobile app install line item.
**/
export class MobileApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: MobileAppPlatformEnum;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;
}
