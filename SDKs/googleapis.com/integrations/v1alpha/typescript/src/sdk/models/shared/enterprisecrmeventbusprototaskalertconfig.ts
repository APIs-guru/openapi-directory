import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";
import { EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue } from "./enterprisecrmeventbusprotobasealertconfigthresholdvalue";
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";

export enum EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED"
,    TaskErrorRate = "TASK_ERROR_RATE"
,    TaskWarningRate = "TASK_WARNING_RATE"
,    TaskRate = "TASK_RATE"
,    TaskAverageDuration = "TASK_AVERAGE_DURATION"
,    TaskPercentileDuration = "TASK_PERCENTILE_DURATION"
}

export enum EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum {
    UnspecifiedThresholdType = "UNSPECIFIED_THRESHOLD_TYPE"
,    ExpectedMin = "EXPECTED_MIN"
,    ExpectedMax = "EXPECTED_MAX"
}


// EnterpriseCrmEventbusProtoTaskAlertConfig
/** 
 * Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
**/
export class EnterpriseCrmEventbusProtoTaskAlertConfig extends SpeakeasyBase {
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
  metricType?: EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum;

  @Metadata({ data: "json, name=numAggregationPeriods" })
  numAggregationPeriods?: number;

  @Metadata({ data: "json, name=onlyFinalAttempt" })
  onlyFinalAttempt?: boolean;

  @Metadata({ data: "json, name=playbookUrl" })
  playbookUrl?: string;

  @Metadata({ data: "json, name=thresholdType" })
  thresholdType?: EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum;

  @Metadata({ data: "json, name=thresholdValue" })
  thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;

  @Metadata({ data: "json, name=warningEnumList" })
  warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
}
