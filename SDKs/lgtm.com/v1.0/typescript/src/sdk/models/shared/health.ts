import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Health } from "./health";

export enum HealthStatusEnum {
    Unknown = "UNKNOWN"
,    Up = "UP"
,    Down = "DOWN"
}


export class Health extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=details", elemType: shared.Health })
  details?: Map<string, Health>;

  @Metadata({ data: "json, name=status" })
  status?: HealthStatusEnum;
}
