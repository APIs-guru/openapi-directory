import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClusterSelector
/** 
 * A selector that chooses target cluster for jobs based on metadata.
**/
export class ClusterSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterLabels" })
  clusterLabels?: Map<string, string>;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
