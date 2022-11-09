import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebAppStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Deleted = "DELETED"
}


// WebApp
/** 
 * Details of a Firebase App for the web.
**/
export class WebApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeyId" })
  apiKeyId?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=appUrls" })
  appUrls?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=state" })
  state?: WebAppStateEnum;

  @Metadata({ data: "json, name=webId" })
  webId?: string;
}
