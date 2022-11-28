import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue } from "./googlecloudintegrationsv1alphaintegrationalertconfigthresholdvalue";
export declare enum GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum {
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
export declare enum GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum {
    ThresholdTypeUnspecified = "THRESHOLD_TYPE_UNSPECIFIED",
    ExpectedMin = "EXPECTED_MIN",
    ExpectedMax = "EXPECTED_MAX"
}
/**
 * Message to be used to configure custom alerting in the {@code EventConfig} protos for an event.
**/
export declare class GoogleCloudIntegrationsV1alphaIntegrationAlertConfig extends SpeakeasyBase {
    aggregationPeriod?: string;
    alertThreshold?: number;
    disableAlert?: boolean;
    displayName?: string;
    durationThreshold?: string;
    metricType?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum;
    onlyFinalAttempt?: boolean;
    thresholdType?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum;
    thresholdValue?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue;
}
