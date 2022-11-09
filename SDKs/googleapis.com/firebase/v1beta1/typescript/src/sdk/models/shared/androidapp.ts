import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AndroidAppStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Deleted = "DELETED"
}


// AndroidApp
/** 
 * Details of a Firebase App for Android.
**/
export class AndroidApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=sha1Hashes" })
  sha1Hashes?: string[];

  @Metadata({ data: "json, name=sha256Hashes" })
  sha256Hashes?: string[];

  @Metadata({ data: "json, name=state" })
  state?: AndroidAppStateEnum;
}
