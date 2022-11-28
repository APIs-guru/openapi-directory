import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the cluster auto-delete schedule configuration.
**/
export declare class LifecycleConfig extends SpeakeasyBase {
    autoDeleteTime?: string;
    autoDeleteTtl?: string;
    idleDeleteTtl?: string;
    idleStartTime?: string;
}
/**
 * Specifies the cluster auto-delete schedule configuration.
**/
export declare class LifecycleConfigInput extends SpeakeasyBase {
    autoDeleteTime?: string;
    autoDeleteTtl?: string;
    idleDeleteTtl?: string;
}
