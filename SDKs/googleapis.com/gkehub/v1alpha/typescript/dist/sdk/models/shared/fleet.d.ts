import { SpeakeasyBase } from "../../../internal/utils";
import { FleetLifecycleState } from "./fleetlifecyclestate";
/**
 * Fleet contains the Fleet-wide metadata and configuration.
**/
export declare class Fleet extends SpeakeasyBase {
    createTime?: string;
    deleteTime?: string;
    displayName?: string;
    name?: string;
    state?: FleetLifecycleState;
    uid?: string;
    updateTime?: string;
}
/**
 * Fleet contains the Fleet-wide metadata and configuration.
**/
export declare class FleetInput extends SpeakeasyBase {
    displayName?: string;
}
