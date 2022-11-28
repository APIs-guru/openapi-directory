import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricAbsence } from "./metricabsence";
import { LogMatch } from "./logmatch";
import { MonitoringQueryLanguageCondition } from "./monitoringquerylanguagecondition";
import { MetricThreshold } from "./metricthreshold";



// Condition
/** 
 * A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
**/
export class Condition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditionAbsent" })
  conditionAbsent?: MetricAbsence;

  @SpeakeasyMetadata({ data: "json, name=conditionMatchedLog" })
  conditionMatchedLog?: LogMatch;

  @SpeakeasyMetadata({ data: "json, name=conditionMonitoringQueryLanguage" })
  conditionMonitoringQueryLanguage?: MonitoringQueryLanguageCondition;

  @SpeakeasyMetadata({ data: "json, name=conditionThreshold" })
  conditionThreshold?: MetricThreshold;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
