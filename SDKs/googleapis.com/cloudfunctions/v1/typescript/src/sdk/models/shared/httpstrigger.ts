import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HttpsTriggerSecurityLevelEnum {
    SecurityLevelUnspecified = "SECURITY_LEVEL_UNSPECIFIED",
    SecureAlways = "SECURE_ALWAYS",
    SecureOptional = "SECURE_OPTIONAL"
}


// HttpsTriggerInput
/** 
 * Describes HttpsTrigger, could be used to connect web hooks to function.
**/
export class HttpsTriggerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityLevel" })
  securityLevel?: HttpsTriggerSecurityLevelEnum;
}


// HttpsTrigger
/** 
 * Describes HttpsTrigger, could be used to connect web hooks to function.
**/
export class HttpsTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityLevel" })
  securityLevel?: HttpsTriggerSecurityLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
