import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HttpsTriggerSecurityLevelEnum {
    SecurityLevelUnspecified = "SECURITY_LEVEL_UNSPECIFIED",
    SecureAlways = "SECURE_ALWAYS",
    SecureOptional = "SECURE_OPTIONAL"
}
/**
 * Describes HttpsTrigger, could be used to connect web hooks to function.
**/
export declare class HttpsTriggerInput extends SpeakeasyBase {
    securityLevel?: HttpsTriggerSecurityLevelEnum;
}
/**
 * Describes HttpsTrigger, could be used to connect web hooks to function.
**/
export declare class HttpsTrigger extends SpeakeasyBase {
    securityLevel?: HttpsTriggerSecurityLevelEnum;
    url?: string;
}
