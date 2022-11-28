import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobPlacement
/** 
 * Dataproc job config.
**/
export class JobPlacement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterLabels" })
  clusterLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;
}


// JobPlacementInput
/** 
 * Dataproc job config.
**/
export class JobPlacementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterLabels" })
  clusterLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;
}
