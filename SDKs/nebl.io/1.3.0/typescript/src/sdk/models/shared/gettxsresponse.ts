import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GetTxResponse } from "./gettxresponse";


// GetTxsResponse
/** 
 * Object containing an array of transaction objects
**/
export class GetTxsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagesTotal" })
  pagesTotal?: number;

  @Metadata({ data: "json, name=txs", elemType: shared.GetTxResponse })
  txs?: GetTxResponse[];
}
