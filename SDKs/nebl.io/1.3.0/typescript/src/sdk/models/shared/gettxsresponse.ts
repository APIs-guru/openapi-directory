import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetTxResponse } from "./gettxresponse";



// GetTxsResponse
/** 
 * Object containing an array of transaction objects
**/
export class GetTxsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagesTotal" })
  pagesTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=txs", elemType: GetTxResponse })
  txs?: GetTxResponse[];
}
