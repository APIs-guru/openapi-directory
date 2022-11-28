import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AlgorithmObjectiveEnum {
    TransportTime = "transport_time",
    CompletionTime = "completion_time"
}
export declare enum AlgorithmProblemTypeEnum {
    Min = "min",
    MinMax = "min-max"
}
/**
 * Use `objectives` instead.
**/
export declare class Algorithm extends SpeakeasyBase {
    objective?: AlgorithmObjectiveEnum;
    problemType?: AlgorithmProblemTypeEnum;
}
