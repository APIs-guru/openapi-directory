import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClusterMetrics
/** 
 * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
**/
export class ClusterMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=hdfsMetrics" })
  hdfsMetrics?: Map<string, string>;

  @Metadata({ data: "json, name=yarnMetrics" })
  yarnMetrics?: Map<string, string>;
}
