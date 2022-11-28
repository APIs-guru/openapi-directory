import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";
import { EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue } from "./enterprisecrmeventbusprotobasealertconfigthresholdvalue";
export declare enum EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum {
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
export declare enum EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum {
    UnspecifiedThresholdType = "UNSPECIFIED_THRESHOLD_TYPE",
    ExpectedMin = "EXPECTED_MIN",
    ExpectedMax = "EXPECTED_MAX"
}
/**
 * Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
**/
export declare class EnterpriseCrmEventbusProtoWorkflowAlertConfig extends SpeakeasyBase {
    aggregationPeriod?: string;
    alertDisabled?: boolean;
    alertName?: string;
    clientId?: string;
    durationThresholdMs?: string;
    errorEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
    metricType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum;
    numAggregationPeriods?: number;
    onlyFinalAttempt?: boolean;
    playbookUrl?: string;
    thresholdType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum;
    thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;
    warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
}
