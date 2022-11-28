import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



// ListConnectionsResponse
/** 
 * Response message for ConnectorsService.ListConnections
**/
export class ListConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection })
  connections?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
