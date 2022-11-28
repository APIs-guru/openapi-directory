import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketOptions } from "./bucketoptions";
import { MetricDescriptor } from "./metricdescriptor";


export enum LogMetricVersionEnum {
    V2 = "V2",
    V1 = "V1"
}


// LogMetricInput
/** 
 * Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
**/
export class LogMetricInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketOptions" })
  bucketOptions?: BucketOptions;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=labelExtractors" })
  labelExtractors?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metricDescriptor" })
  metricDescriptor?: MetricDescriptor;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=valueExtractor" })
  valueExtractor?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: LogMetricVersionEnum;
}


// LogMetric
/** 
 * Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
**/
export class LogMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketOptions" })
  bucketOptions?: BucketOptions;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=labelExtractors" })
  labelExtractors?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metricDescriptor" })
  metricDescriptor?: MetricDescriptor;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=valueExtractor" })
  valueExtractor?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: LogMetricVersionEnum;
}
