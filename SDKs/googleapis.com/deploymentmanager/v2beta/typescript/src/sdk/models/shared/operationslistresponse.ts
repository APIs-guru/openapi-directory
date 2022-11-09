import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";


// OperationsListResponse
/** 
 * A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.
**/
export class OperationsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];
}
