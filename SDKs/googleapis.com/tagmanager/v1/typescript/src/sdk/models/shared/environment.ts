import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnvironmentTypeEnum {
    User = "user",
    Live = "live",
    Latest = "latest",
    Draft = "draft"
}


// Environment
/** 
 * Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizationCode" })
  authorizationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizationTimestampMs" })
  authorizationTimestampMs?: string;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerVersionId" })
  containerVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enableDebug" })
  enableDebug?: boolean;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EnvironmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
