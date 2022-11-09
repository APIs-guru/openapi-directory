import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FirebaseAppInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    Ios = "IOS"
,    Android = "ANDROID"
,    Web = "WEB"
}

export enum FirebaseAppInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Deleted = "DELETED"
}


// FirebaseAppInfo
/** 
 * A high-level summary of an App.
**/
export class FirebaseAppInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: FirebaseAppInfoPlatformEnum;

  @Metadata({ data: "json, name=state" })
  state?: FirebaseAppInfoStateEnum;
}
