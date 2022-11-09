import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue } from "./googlecloudintegrationsv1alphaintegrationalertconfigthresholdvalue";

export enum GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum {
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

export enum GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum {
    ThresholdTypeUnspecified = "THRESHOLD_TYPE_UNSPECIFIED"
,    ExpectedMin = "EXPECTED_MIN"
,    ExpectedMax = "EXPECTED_MAX"
}


// GoogleCloudIntegrationsV1alphaIntegrationAlertConfig
/** 
 * Message to be used to configure custom alerting in the {@code EventConfig} protos for an event.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationAlertConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationPeriod" })
  aggregationPeriod?: string;

  @Metadata({ data: "json, name=alertThreshold" })
  alertThreshold?: number;

  @Metadata({ data: "json, name=disableAlert" })
  disableAlert?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=durationThreshold" })
  durationThreshold?: string;

  @Metadata({ data: "json, name=metricType" })
  metricType?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum;

  @Metadata({ data: "json, name=onlyFinalAttempt" })
  onlyFinalAttempt?: boolean;

  @Metadata({ data: "json, name=thresholdType" })
  thresholdType?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum;

  @Metadata({ data: "json, name=thresholdValue" })
  thresholdValue?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue;
}
