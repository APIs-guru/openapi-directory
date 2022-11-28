import { SpeakeasyBase } from "../../../internal/utils";
import { MetricAbsence } from "./metricabsence";
import { LogMatch } from "./logmatch";
import { MonitoringQueryLanguageCondition } from "./monitoringquerylanguagecondition";
import { MetricThreshold } from "./metricthreshold";
/**
 * A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
**/
export declare class Condition extends SpeakeasyBase {
    conditionAbsent?: MetricAbsence;
    conditionMatchedLog?: LogMatch;
    conditionMonitoringQueryLanguage?: MonitoringQueryLanguageCondition;
    conditionThreshold?: MetricThreshold;
    displayName?: string;
    name?: string;
}
