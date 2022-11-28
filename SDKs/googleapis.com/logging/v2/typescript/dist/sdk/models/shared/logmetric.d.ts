import { SpeakeasyBase } from "../../../internal/utils";
import { BucketOptions } from "./bucketoptions";
import { MetricDescriptor } from "./metricdescriptor";
export declare enum LogMetricVersionEnum {
    V2 = "V2",
    V1 = "V1"
}
/**
 * Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
**/
export declare class LogMetricInput extends SpeakeasyBase {
    bucketName?: string;
    bucketOptions?: BucketOptions;
    description?: string;
    disabled?: boolean;
    filter?: string;
    labelExtractors?: Map<string, string>;
    metricDescriptor?: MetricDescriptor;
    name?: string;
    valueExtractor?: string;
    version?: LogMetricVersionEnum;
}
/**
 * Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
**/
export declare class LogMetric extends SpeakeasyBase {
    bucketName?: string;
    bucketOptions?: BucketOptions;
    createTime?: string;
    description?: string;
    disabled?: boolean;
    filter?: string;
    labelExtractors?: Map<string, string>;
    metricDescriptor?: MetricDescriptor;
    name?: string;
    updateTime?: string;
    valueExtractor?: string;
    version?: LogMetricVersionEnum;
}
