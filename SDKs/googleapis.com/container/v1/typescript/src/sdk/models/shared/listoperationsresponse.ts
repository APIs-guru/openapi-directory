import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



// ListOperationsResponse
/** 
 * ListOperationsResponse is the result of ListOperationsRequest.
**/
export class ListOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=missingZones" })
  missingZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: Operation })
  operations?: Operation[];
}
