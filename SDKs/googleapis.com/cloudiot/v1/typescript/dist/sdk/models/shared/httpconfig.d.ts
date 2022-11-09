import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum HttpConfigHttpEnabledStateEnum {
    HttpStateUnspecified = "HTTP_STATE_UNSPECIFIED",
    HttpEnabled = "HTTP_ENABLED",
    HttpDisabled = "HTTP_DISABLED"
}
/**
 * The configuration of the HTTP bridge for a device registry.
**/
export declare class HttpConfig extends SpeakeasyBase {
    httpEnabledState?: HttpConfigHttpEnabledStateEnum;
}
