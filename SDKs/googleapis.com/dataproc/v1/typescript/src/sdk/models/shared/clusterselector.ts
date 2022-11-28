import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterSelector
/** 
 * A selector that chooses target cluster for jobs based on metadata.
**/
export class ClusterSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterLabels" })
  clusterLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
