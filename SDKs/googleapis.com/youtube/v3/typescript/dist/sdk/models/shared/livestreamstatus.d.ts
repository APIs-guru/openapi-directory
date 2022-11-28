import { SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamHealthStatus } from "./livestreamhealthstatus";
export declare enum LiveStreamStatusStreamStatusEnum {
    Created = "created",
    Ready = "ready",
    Active = "active",
    Inactive = "inactive",
    Error = "error"
}
/**
 * Brief description of the live stream status.
**/
export declare class LiveStreamStatus extends SpeakeasyBase {
    healthStatus?: LiveStreamHealthStatus;
    streamStatus?: LiveStreamStatusStreamStatusEnum;
}
