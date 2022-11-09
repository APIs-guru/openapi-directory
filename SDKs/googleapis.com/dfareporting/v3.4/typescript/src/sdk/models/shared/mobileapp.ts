import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MobileAppDirectoryEnum {
    Unknown = "UNKNOWN"
,    AppleAppStore = "APPLE_APP_STORE"
,    GooglePlayStore = "GOOGLE_PLAY_STORE"
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
