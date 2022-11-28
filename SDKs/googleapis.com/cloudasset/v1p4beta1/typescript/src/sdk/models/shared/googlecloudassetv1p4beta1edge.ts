import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssetV1p4beta1Edge
/** 
 * A directional edge.
**/
export class GoogleCloudAssetV1p4beta1Edge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceNode" })
  sourceNode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetNode" })
  targetNode?: string;
}
