import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";


// ListOperationsResponse
/** 
 * The response message for Operations.ListOperations.
**/
export class ListOperationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];
}
