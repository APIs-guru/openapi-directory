import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";
import { EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue } from "./enterprisecrmeventbusprotobasealertconfigthresholdvalue";


export enum EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    TaskErrorRate = "TASK_ERROR_RATE",
    TaskWarningRate = "TASK_WARNING_RATE",
    TaskRate = "TASK_RATE",
    TaskAverageDuration = "TASK_AVERAGE_DURATION",
    TaskPercentileDuration = "TASK_PERCENTILE_DURATION"
}

export enum EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum {
    UnspecifiedThresholdType = "UNSPECIFIED_THRESHOLD_TYPE",
    ExpectedMin = "EXPECTED_MIN",
    ExpectedMax = "EXPECTED_MAX"
}


// EnterpriseCrmEventbusProtoTaskAlertConfig
/** 
 * Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
**/
export class EnterpriseCrmEventbusProtoTaskAlertConfig extends SpeakeasyBase {
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
  metricType?: EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=numAggregationPeriods" })
  numAggregationPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=onlyFinalAttempt" })
  onlyFinalAttempt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=playbookUrl" })
  playbookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thresholdType" })
  thresholdType?: EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=thresholdValue" })
  thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;

  @SpeakeasyMetadata({ data: "json, name=warningEnumList" })
  warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
}
