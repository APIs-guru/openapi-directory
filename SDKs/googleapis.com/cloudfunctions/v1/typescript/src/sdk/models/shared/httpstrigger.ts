import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HttpsTriggerSecurityLevelEnum {
    SecurityLevelUnspecified = "SECURITY_LEVEL_UNSPECIFIED"
,    SecureAlways = "SECURE_ALWAYS"
,    SecureOptional = "SECURE_OPTIONAL"
}


// HttpsTrigger
/** 
 * Describes HttpsTrigger, could be used to connect web hooks to function.
**/
export class HttpsTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityLevel" })
  securityLevel?: HttpsTriggerSecurityLevelEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
