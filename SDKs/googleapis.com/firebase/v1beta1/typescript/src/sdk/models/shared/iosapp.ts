import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IosAppStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Deleted = "DELETED"
}


// IosApp
/** 
 * Details of a Firebase App for iOS.
**/
export class IosApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=appStoreId" })
  appStoreId?: string;

  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=state" })
  state?: IosAppStateEnum;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;
}
