import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



// ListConnectionsResponse
/** 
 * ListConnectionsResponse is the response to list peering states for the given service and consumer project.
**/
export class ListConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection })
  connections?: Connection[];
}
