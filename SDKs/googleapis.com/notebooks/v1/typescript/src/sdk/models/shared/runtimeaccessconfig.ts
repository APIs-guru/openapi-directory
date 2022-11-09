import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RuntimeAccessConfigAccessTypeEnum {
    RuntimeAccessTypeUnspecified = "RUNTIME_ACCESS_TYPE_UNSPECIFIED"
,    SingleUser = "SINGLE_USER"
,    ServiceAccount = "SERVICE_ACCOUNT"
}


// RuntimeAccessConfig
/** 
 * Specifies the login configuration for Runtime
**/
export class RuntimeAccessConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessType" })
  accessType?: RuntimeAccessConfigAccessTypeEnum;

  @Metadata({ data: "json, name=proxyUri" })
  proxyUri?: string;

  @Metadata({ data: "json, name=runtimeOwner" })
  runtimeOwner?: string;
}
