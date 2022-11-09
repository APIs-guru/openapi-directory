import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";


// CreateAssetResponse
/** 
 * A response message for CreateAsset.
**/
export class CreateAssetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset?: Asset;
}
