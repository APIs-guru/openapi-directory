import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



// ListInstanceConfigOperationsResponse
/** 
 * The response for ListInstanceConfigOperations.
**/
export class ListInstanceConfigOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: Operation })
  operations?: Operation[];
}
