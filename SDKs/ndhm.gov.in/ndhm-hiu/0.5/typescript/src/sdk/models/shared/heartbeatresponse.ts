import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";

export enum HeartbeatResponseStatusEnum {
    Up = "UP"
,    Down = "DOWN"
}


export class HeartbeatResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=status" })
  status: HeartbeatResponseStatusEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
