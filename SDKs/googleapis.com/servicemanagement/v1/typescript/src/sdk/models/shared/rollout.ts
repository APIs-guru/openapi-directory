import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficPercentStrategy } from "./trafficpercentstrategy";


export enum RolloutStatusEnum {
    RolloutStatusUnspecified = "ROLLOUT_STATUS_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Success = "SUCCESS",
    Cancelled = "CANCELLED",
    Failed = "FAILED",
    Pending = "PENDING",
    FailedRolledBack = "FAILED_ROLLED_BACK"
}


// Rollout
/** 
 * A rollout resource that defines how service configuration versions are pushed to control plane systems. Typically, you create a new version of the service config, and then create a Rollout to push the service config.
**/
export class Rollout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteServiceStrategy" })
  deleteServiceStrategy?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=rolloutId" })
  rolloutId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RolloutStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=trafficPercentStrategy" })
  trafficPercentStrategy?: TrafficPercentStrategy;
}
