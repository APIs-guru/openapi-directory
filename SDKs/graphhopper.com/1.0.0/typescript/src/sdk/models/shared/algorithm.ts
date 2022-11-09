import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AlgorithmObjectiveEnum {
    TransportTime = "transport_time"
,    CompletionTime = "completion_time"
}

export enum AlgorithmProblemTypeEnum {
    Min = "min"
,    MinMax = "min-max"
}


// Algorithm
/** 
 * Use `objectives` instead.
**/
export class Algorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=objective" })
  objective?: AlgorithmObjectiveEnum;

  @Metadata({ data: "json, name=problem_type" })
  problemType?: AlgorithmProblemTypeEnum;
}
