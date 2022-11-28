import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuntimeMetrics
/** 
 * Contains runtime daemon metrics, such as OS and kernels and sessions stats.
**/
export class RuntimeMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=systemMetrics" })
  systemMetrics?: Map<string, string>;
}
