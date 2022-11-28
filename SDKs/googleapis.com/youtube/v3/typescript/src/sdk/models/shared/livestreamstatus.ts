import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamHealthStatus } from "./livestreamhealthstatus";


export enum LiveStreamStatusStreamStatusEnum {
    Created = "created",
    Ready = "ready",
    Active = "active",
    Inactive = "inactive",
    Error = "error"
}


// LiveStreamStatus
/** 
 * Brief description of the live stream status.
**/
export class LiveStreamStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=healthStatus" })
  healthStatus?: LiveStreamHealthStatus;

  @SpeakeasyMetadata({ data: "json, name=streamStatus" })
  streamStatus?: LiveStreamStatusStreamStatusEnum;
}
