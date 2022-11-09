import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TemporalAsset } from "./temporalasset";


// BatchGetAssetsHistoryResponse
/** 
 * Batch get assets history response.
**/
export class BatchGetAssetsHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: shared.TemporalAsset })
  assets?: TemporalAsset[];
}
