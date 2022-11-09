import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";


// ListOperationsResponse
/** 
 * ListOperationsResponse is the result of ListOperationsRequest.
**/
export class ListOperationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=missingZones" })
  missingZones?: string[];

  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];
}
