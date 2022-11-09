import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobPlacement
/** 
 * Dataproc job config.
**/
export class JobPlacement extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterLabels" })
  clusterLabels?: Map<string, string>;

  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;
}
