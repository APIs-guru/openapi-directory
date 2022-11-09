import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiveStreamHealthStatus } from "./livestreamhealthstatus";

export enum LiveStreamStatusStreamStatusEnum {
    Created = "created"
,    Ready = "ready"
,    Active = "active"
,    Inactive = "inactive"
,    Error = "error"
}


// LiveStreamStatus
/** 
 * Brief description of the live stream status.
**/
export class LiveStreamStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=healthStatus" })
  healthStatus?: LiveStreamHealthStatus;

  @Metadata({ data: "json, name=streamStatus" })
  streamStatus?: LiveStreamStatusStreamStatusEnum;
}
