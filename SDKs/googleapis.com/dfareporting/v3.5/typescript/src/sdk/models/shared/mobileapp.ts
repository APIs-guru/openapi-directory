import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MobileAppDirectoryEnum {
    Unknown = "UNKNOWN"
,    AppleAppStore = "APPLE_APP_STORE"
,    GooglePlayStore = "GOOGLE_PLAY_STORE"
,    RokuAppStore = "ROKU_APP_STORE"
,    AmazonFiretvAppStore = "AMAZON_FIRETV_APP_STORE"
,    PlaystationAppStore = "PLAYSTATION_APP_STORE"
,    AppleTvAppStore = "APPLE_TV_APP_STORE"
,    XboxAppStore = "XBOX_APP_STORE"
,    SamsungTvAppStore = "SAMSUNG_TV_APP_STORE"
,    AndroidTvAppStore = "ANDROID_TV_APP_STORE"
,    GenericCtvAppStore = "GENERIC_CTV_APP_STORE"
}


// MobileApp
/** 
 * Contains information about a mobile app. Used as a landing page deep link.
**/
export class MobileApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=directory" })
  directory?: MobileAppDirectoryEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=publisherName" })
  publisherName?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
