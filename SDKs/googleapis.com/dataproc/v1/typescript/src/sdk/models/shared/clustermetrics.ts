import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterMetrics
/** 
 * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
**/
export class ClusterMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hdfsMetrics" })
  hdfsMetrics?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=yarnMetrics" })
  yarnMetrics?: Map<string, string>;
}
