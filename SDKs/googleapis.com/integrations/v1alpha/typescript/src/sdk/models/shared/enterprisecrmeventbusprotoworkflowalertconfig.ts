import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";
import { EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue } from "./enterprisecrmeventbusprotobasealertconfigthresholdvalue";


export enum EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    EventErrorRate = "EVENT_ERROR_RATE",
    EventWarningRate = "EVENT_WARNING_RATE",
    TaskErrorRate = "TASK_ERROR_RATE",
    TaskWarningRate = "TASK_WARNING_RATE",
    TaskRate = "TASK_RATE",
    EventRate = "EVENT_RATE",
    EventAverageDuration = "EVENT_AVERAGE_DURATION",
    EventPercentileDuration = "EVENT_PERCENTILE_DURATION",
    TaskAverageDuration = "TASK_AVERAGE_DURATION",
    TaskPercentileDuration = "TASK_PERCENTILE_DURATION"
}

export enum EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum {
    UnspecifiedThresholdType = "UNSPECIFIED_THRESHOLD_TYPE",
    ExpectedMin = "EXPECTED_MIN",
    ExpectedMax = "EXPECTED_MAX"
}


// EnterpriseCrmEventbusProtoWorkflowAlertConfig
/** 
 * Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
**/
export class EnterpriseCrmEventbusProtoWorkflowAlertConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationPeriod" })
  aggregationPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=alertDisabled" })
  alertDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alertName" })
  alertName?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=durationThresholdMs" })
  durationThresholdMs?: string;

  @SpeakeasyMetadata({ data: "json, name=errorEnumList" })
  errorEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;

  @SpeakeasyMetadata({ data: "json, name=metricType" })
  metricType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=numAggregationPeriods" })
  numAggregationPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=onlyFinalAttempt" })
  onlyFinalAttempt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=playbookUrl" })
  playbookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thresholdType" })
  thresholdType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=thresholdValue" })
  thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;

  @SpeakeasyMetadata({ data: "json, name=warningEnumList" })
  warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
}
