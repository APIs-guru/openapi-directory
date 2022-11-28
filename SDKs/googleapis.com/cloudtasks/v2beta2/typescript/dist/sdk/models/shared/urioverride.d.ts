import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UriOverrideSchemeEnum {
    SchemeUnspecified = "SCHEME_UNSPECIFIED",
    Http = "HTTP",
    Https = "HTTPS"
}
export declare enum UriOverrideUriOverrideEnforceModeEnum {
    UriOverrideEnforceModeUnspecified = "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED",
    IfNotExists = "IF_NOT_EXISTS",
    Always = "ALWAYS"
}
/**
 * Uri Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
**/
export declare class UriOverride extends SpeakeasyBase {
    host?: string;
    path?: string;
    port?: string;
    query?: string;
    scheme?: UriOverrideSchemeEnum;
    uriOverrideEnforceMode?: UriOverrideUriOverrideEnforceModeEnum;
}
