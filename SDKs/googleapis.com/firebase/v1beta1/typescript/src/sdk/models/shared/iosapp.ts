import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IosAppStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}


// IosAppInput
/** 
 * Details of a Firebase App for iOS.
**/
export class IosAppInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=appStoreId" })
  appStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;
}


// IosApp
/** 
 * Details of a Firebase App for iOS.
**/
export class IosApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=appStoreId" })
  appStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: IosAppStateEnum;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;
}
