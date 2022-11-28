import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MobileAppDirectoryEnum {
    Unknown = "UNKNOWN",
    AppleAppStore = "APPLE_APP_STORE",
    GooglePlayStore = "GOOGLE_PLAY_STORE"
}


// MobileApp
/** 
 * Contains information about a mobile app. Used as a landing page deep link.
**/
export class MobileApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directory" })
  directory?: MobileAppDirectoryEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherName" })
  publisherName?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
