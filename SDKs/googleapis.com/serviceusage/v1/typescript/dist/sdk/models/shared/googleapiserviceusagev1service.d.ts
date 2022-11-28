import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiServiceusageV1ServiceConfig } from "./googleapiserviceusagev1serviceconfig";
export declare enum GoogleApiServiceusageV1ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * A service that is available for use by the consumer.
**/
export declare class GoogleApiServiceusageV1Service extends SpeakeasyBase {
    config?: GoogleApiServiceusageV1ServiceConfig;
    name?: string;
    parent?: string;
    state?: GoogleApiServiceusageV1ServiceStateEnum;
}
