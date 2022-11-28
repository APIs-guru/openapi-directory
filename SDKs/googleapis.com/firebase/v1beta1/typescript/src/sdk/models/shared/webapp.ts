import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebAppStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}


// WebAppInput
/** 
 * Details of a Firebase App for the web.
**/
export class WebAppInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=appUrls" })
  appUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// WebApp
/** 
 * Details of a Firebase App for the web.
**/
export class WebApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=appUrls" })
  appUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: WebAppStateEnum;

  @SpeakeasyMetadata({ data: "json, name=webId" })
  webId?: string;
}
