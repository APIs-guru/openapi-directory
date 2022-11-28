import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficPercentStrategy } from "./trafficpercentstrategy";
export declare enum RolloutStatusEnum {
    RolloutStatusUnspecified = "ROLLOUT_STATUS_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Success = "SUCCESS",
    Cancelled = "CANCELLED",
    Failed = "FAILED",
    Pending = "PENDING",
    FailedRolledBack = "FAILED_ROLLED_BACK"
}
/**
 * A rollout resource that defines how service configuration versions are pushed to control plane systems. Typically, you create a new version of the service config, and then create a Rollout to push the service config.
**/
export declare class Rollout extends SpeakeasyBase {
    createTime?: string;
    createdBy?: string;
    deleteServiceStrategy?: Map<string, any>;
    rolloutId?: string;
    serviceName?: string;
    status?: RolloutStatusEnum;
    trafficPercentStrategy?: TrafficPercentStrategy;
}
