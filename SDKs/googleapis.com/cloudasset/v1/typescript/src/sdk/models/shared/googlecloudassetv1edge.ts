import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssetV1Edge
/** 
 * A directional edge.
**/
export class GoogleCloudAssetV1Edge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceNode" })
  sourceNode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetNode" })
  targetNode?: string;
}
