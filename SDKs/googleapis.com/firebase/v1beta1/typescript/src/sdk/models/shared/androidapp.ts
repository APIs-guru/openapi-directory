import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AndroidAppStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}


// AndroidApp
/** 
 * Details of a Firebase App for Android.
**/
export class AndroidApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=sha1Hashes" })
  sha1Hashes?: string[];

  @SpeakeasyMetadata({ data: "json, name=sha256Hashes" })
  sha256Hashes?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AndroidAppStateEnum;
}


// AndroidAppInput
/** 
 * Details of a Firebase App for Android.
**/
export class AndroidAppInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=sha1Hashes" })
  sha1Hashes?: string[];

  @SpeakeasyMetadata({ data: "json, name=sha256Hashes" })
  sha256Hashes?: string[];
}
