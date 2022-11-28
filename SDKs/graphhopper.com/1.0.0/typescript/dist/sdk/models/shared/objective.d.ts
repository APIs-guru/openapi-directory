import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObjectiveTypeEnum {
    Min = "min",
    MinMax = "min-max"
}
export declare enum ObjectiveValueEnum {
    CompletionTime = "completion_time",
    TransportTime = "transport_time",
    Vehicles = "vehicles",
    Activities = "activities"
}
export declare class Objective extends SpeakeasyBase {
    type: ObjectiveTypeEnum;
    value: ObjectiveValueEnum;
}
