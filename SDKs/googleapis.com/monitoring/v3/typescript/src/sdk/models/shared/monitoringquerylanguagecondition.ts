import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Trigger } from "./trigger";

export enum MonitoringQueryLanguageConditionEvaluationMissingDataEnum {
    EvaluationMissingDataUnspecified = "EVALUATION_MISSING_DATA_UNSPECIFIED"
,    EvaluationMissingDataInactive = "EVALUATION_MISSING_DATA_INACTIVE"
,    EvaluationMissingDataActive = "EVALUATION_MISSING_DATA_ACTIVE"
,    EvaluationMissingDataNoOp = "EVALUATION_MISSING_DATA_NO_OP"
}


// MonitoringQueryLanguageCondition
/** 
 * A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql).
**/
export class MonitoringQueryLanguageCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=evaluationMissingData" })
  evaluationMissingData?: MonitoringQueryLanguageConditionEvaluationMissingDataEnum;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=trigger" })
  trigger?: Trigger;
}
