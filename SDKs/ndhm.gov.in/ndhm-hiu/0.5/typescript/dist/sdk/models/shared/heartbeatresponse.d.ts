import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
export declare enum HeartbeatResponseStatusEnum {
    Up = "UP",
    Down = "DOWN"
}
export declare class HeartbeatResponse extends SpeakeasyBase {
    error?: Error;
    status: HeartbeatResponseStatusEnum;
    timestamp: Date;
}
