import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricAbsence } from "./metricabsence";
import { LogMatch } from "./logmatch";
import { MonitoringQueryLanguageCondition } from "./monitoringquerylanguagecondition";
import { MetricThreshold } from "./metricthreshold";


// Condition
/** 
 * A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
**/
export class Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditionAbsent" })
  conditionAbsent?: MetricAbsence;

  @Metadata({ data: "json, name=conditionMatchedLog" })
  conditionMatchedLog?: LogMatch;

  @Metadata({ data: "json, name=conditionMonitoringQueryLanguage" })
  conditionMonitoringQueryLanguage?: MonitoringQueryLanguageCondition;

  @Metadata({ data: "json, name=conditionThreshold" })
  conditionThreshold?: MetricThreshold;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
