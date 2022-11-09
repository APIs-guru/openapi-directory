import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";
import { EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue } from "./enterprisecrmeventbusprotobasealertconfigthresholdvalue";
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";

export enum EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED"
,    EventErrorRate = "EVENT_ERROR_RATE"
,    EventWarningRate = "EVENT_WARNING_RATE"
,    TaskErrorRate = "TASK_ERROR_RATE"
,    TaskWarningRate = "TASK_WARNING_RATE"
,    TaskRate = "TASK_RATE"
,    EventRate = "EVENT_RATE"
,    EventAverageDuration = "EVENT_AVERAGE_DURATION"
,    EventPercentileDuration = "EVENT_PERCENTILE_DURATION"
,    TaskAverageDuration = "TASK_AVERAGE_DURATION"
,    TaskPercentileDuration = "TASK_PERCENTILE_DURATION"
}

export enum EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum {
    UnspecifiedThresholdType = "UNSPECIFIED_THRESHOLD_TYPE"
,    ExpectedMin = "EXPECTED_MIN"
,    ExpectedMax = "EXPECTED_MAX"
}


// EnterpriseCrmEventbusProtoWorkflowAlertConfig
/** 
 * Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
**/
export class EnterpriseCrmEventbusProtoWorkflowAlertConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationPeriod" })
  aggregationPeriod?: string;

  @Metadata({ data: "json, name=alertDisabled" })
  alertDisabled?: boolean;

  @Metadata({ data: "json, name=alertName" })
  alertName?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=durationThresholdMs" })
  durationThresholdMs?: string;

  @Metadata({ data: "json, name=errorEnumList" })
  errorEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;

  @Metadata({ data: "json, name=metricType" })
  metricType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum;

  @Metadata({ data: "json, name=numAggregationPeriods" })
  numAggregationPeriods?: number;

  @Metadata({ data: "json, name=onlyFinalAttempt" })
  onlyFinalAttempt?: boolean;

  @Metadata({ data: "json, name=playbookUrl" })
  playbookUrl?: string;

  @Metadata({ data: "json, name=thresholdType" })
  thresholdType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum;

  @Metadata({ data: "json, name=thresholdValue" })
  thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;

  @Metadata({ data: "json, name=warningEnumList" })
  warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
}
