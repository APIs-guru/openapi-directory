import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketOptions } from "./bucketoptions";
import { MetricDescriptor } from "./metricdescriptor";

export enum LogMetricVersionEnum {
    V2 = "V2"
,    V1 = "V1"
}


// LogMetric
/** 
 * Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
**/
export class LogMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=bucketOptions" })
  bucketOptions?: BucketOptions;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=labelExtractors" })
  labelExtractors?: Map<string, string>;

  @Metadata({ data: "json, name=metricDescriptor" })
  metricDescriptor?: MetricDescriptor;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=valueExtractor" })
  valueExtractor?: string;

  @Metadata({ data: "json, name=version" })
  version?: LogMetricVersionEnum;
}
