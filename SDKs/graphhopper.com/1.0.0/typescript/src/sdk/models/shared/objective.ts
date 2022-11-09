import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ObjectiveTypeEnum {
    Min = "min"
,    MinMax = "min-max"
}

export enum ObjectiveValueEnum {
    CompletionTime = "completion_time"
,    TransportTime = "transport_time"
,    Vehicles = "vehicles"
,    Activities = "activities"
}


export class Objective extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: ObjectiveTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: ObjectiveValueEnum;
}
