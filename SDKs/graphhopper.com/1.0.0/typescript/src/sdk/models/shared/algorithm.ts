import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AlgorithmObjectiveEnum {
    TransportTime = "transport_time",
    CompletionTime = "completion_time"
}

export enum AlgorithmProblemTypeEnum {
    Min = "min",
    MinMax = "min-max"
}


// Algorithm
/** 
 * Use `objectives` instead.
**/
export class Algorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objective" })
  objective?: AlgorithmObjectiveEnum;

  @SpeakeasyMetadata({ data: "json, name=problem_type" })
  problemType?: AlgorithmProblemTypeEnum;
}
