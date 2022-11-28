import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceConfig } from "./serviceconfig";
export declare enum ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * A service that is available for use by the consumer.
**/
export declare class Service extends SpeakeasyBase {
    config?: ServiceConfig;
    name?: string;
    parent?: string;
    state?: ServiceStateEnum;
}
