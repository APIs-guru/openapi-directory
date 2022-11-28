import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
**/
export declare class ClusterMetrics extends SpeakeasyBase {
    hdfsMetrics?: Map<string, string>;
    yarnMetrics?: Map<string, string>;
}
