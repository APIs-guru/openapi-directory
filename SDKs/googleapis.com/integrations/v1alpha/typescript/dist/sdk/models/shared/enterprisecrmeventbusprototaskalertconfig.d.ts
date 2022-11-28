import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";
import { EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue } from "./enterprisecrmeventbusprotobasealertconfigthresholdvalue";
export declare enum EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    TaskErrorRate = "TASK_ERROR_RATE",
    TaskWarningRate = "TASK_WARNING_RATE",
    TaskRate = "TASK_RATE",
    TaskAverageDuration = "TASK_AVERAGE_DURATION",
    TaskPercentileDuration = "TASK_PERCENTILE_DURATION"
}
export declare enum EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum {
    UnspecifiedThresholdType = "UNSPECIFIED_THRESHOLD_TYPE",
    ExpectedMin = "EXPECTED_MIN",
    ExpectedMax = "EXPECTED_MAX"
}
/**
 * Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
**/
export declare class EnterpriseCrmEventbusProtoTaskAlertConfig extends SpeakeasyBase {
    aggregationPeriod?: string;
    alertDisabled?: boolean;
    alertName?: string;
    clientId?: string;
    durationThresholdMs?: string;
    errorEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
    metricType?: EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum;
    numAggregationPeriods?: number;
    onlyFinalAttempt?: boolean;
    playbookUrl?: string;
    thresholdType?: EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum;
    thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;
    warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
}
