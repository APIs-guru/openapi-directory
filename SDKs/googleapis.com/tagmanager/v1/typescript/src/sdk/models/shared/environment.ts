import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnvironmentTypeEnum {
    User = "user"
,    Live = "live"
,    Latest = "latest"
,    Draft = "draft"
}


// Environment
/** 
 * Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=authorizationCode" })
  authorizationCode?: string;

  @Metadata({ data: "json, name=authorizationTimestampMs" })
  authorizationTimestampMs?: string;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=containerVersionId" })
  containerVersionId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enableDebug" })
  enableDebug?: boolean;

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: EnvironmentTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
