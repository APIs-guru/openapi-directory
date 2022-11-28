import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemporalAsset } from "./temporalasset";



// BatchGetAssetsHistoryResponse
/** 
 * Batch get assets history response.
**/
export class BatchGetAssetsHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: TemporalAsset })
  assets?: TemporalAsset[];
}
