import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Sku } from "./sku";


// ListSkusResponse
/** 
 * Response message for `ListSkus`.
**/
export class ListSkusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=skus", elemType: shared.Sku })
  skus?: Sku[];
}
