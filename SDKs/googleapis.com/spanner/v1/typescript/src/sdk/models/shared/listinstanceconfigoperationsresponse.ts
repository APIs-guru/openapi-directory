import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";


// ListInstanceConfigOperationsResponse
/** 
 * The response for ListInstanceConfigOperations.
**/
export class ListInstanceConfigOperationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];
}
