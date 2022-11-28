import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";



// CreateAssetResponse
/** 
 * A response message for CreateAsset.
**/
export class CreateAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: Asset;
}
