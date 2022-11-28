import { SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";
export declare enum MonitoringQueryLanguageConditionEvaluationMissingDataEnum {
    EvaluationMissingDataUnspecified = "EVALUATION_MISSING_DATA_UNSPECIFIED",
    EvaluationMissingDataInactive = "EVALUATION_MISSING_DATA_INACTIVE",
    EvaluationMissingDataActive = "EVALUATION_MISSING_DATA_ACTIVE",
    EvaluationMissingDataNoOp = "EVALUATION_MISSING_DATA_NO_OP"
}
/**
 * A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql).
**/
export declare class MonitoringQueryLanguageCondition extends SpeakeasyBase {
    duration?: string;
    evaluationMissingData?: MonitoringQueryLanguageConditionEvaluationMissingDataEnum;
    query?: string;
    trigger?: Trigger;
}
