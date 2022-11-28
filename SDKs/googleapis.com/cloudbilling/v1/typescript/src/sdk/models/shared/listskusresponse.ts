import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sku } from "./sku";



// ListSkusResponse
/** 
 * Response message for `ListSkus`.
**/
export class ListSkusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=skus", elemType: Sku })
  skus?: Sku[];
}
