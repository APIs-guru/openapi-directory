import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrafficPercentStrategy } from "./trafficpercentstrategy";

export enum RolloutStatusEnum {
    RolloutStatusUnspecified = "ROLLOUT_STATUS_UNSPECIFIED"
,    InProgress = "IN_PROGRESS"
,    Success = "SUCCESS"
,    Cancelled = "CANCELLED"
,    Failed = "FAILED"
,    Pending = "PENDING"
,    FailedRolledBack = "FAILED_ROLLED_BACK"
}


// Rollout
/** 
 * A rollout resource that defines how service configuration versions are pushed to control plane systems. Typically, you create a new version of the service config, and then create a Rollout to push the service config.
**/
export class Rollout extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=deleteServiceStrategy" })
  deleteServiceStrategy?: Map<string, any>;

  @Metadata({ data: "json, name=rolloutId" })
  rolloutId?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=status" })
  status?: RolloutStatusEnum;

  @Metadata({ data: "json, name=trafficPercentStrategy" })
  trafficPercentStrategy?: TrafficPercentStrategy;
}
