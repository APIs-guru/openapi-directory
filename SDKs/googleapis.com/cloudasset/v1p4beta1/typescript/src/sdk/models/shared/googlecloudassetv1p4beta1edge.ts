import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudAssetV1p4beta1Edge
/** 
 * A directional edge.
**/
export class GoogleCloudAssetV1p4beta1Edge extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceNode" })
  sourceNode?: string;

  @Metadata({ data: "json, name=targetNode" })
  targetNode?: string;
}
