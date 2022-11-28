import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FirebaseAppInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Ios = "IOS",
    Android = "ANDROID",
    Web = "WEB"
}

export enum FirebaseAppInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}


// FirebaseAppInfo
/** 
 * A high-level summary of an App.
**/
export class FirebaseAppInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: FirebaseAppInfoPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FirebaseAppInfoStateEnum;
}
