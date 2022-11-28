import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObjectiveTypeEnum {
    Min = "min",
    MinMax = "min-max"
}

export enum ObjectiveValueEnum {
    CompletionTime = "completion_time",
    TransportTime = "transport_time",
    Vehicles = "vehicles",
    Activities = "activities"
}


export class Objective extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ObjectiveTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: ObjectiveValueEnum;
}
