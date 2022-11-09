import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuntimeMetrics
/** 
 * Contains runtime daemon metrics, such as OS and kernels and sessions stats.
**/
export class RuntimeMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=systemMetrics" })
  systemMetrics?: Map<string, string>;
}
