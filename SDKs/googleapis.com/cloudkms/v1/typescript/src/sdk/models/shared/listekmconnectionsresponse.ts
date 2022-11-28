import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EkmConnection } from "./ekmconnection";



// ListEkmConnectionsResponse
/** 
 * Response message for EkmService.ListEkmConnections.
**/
export class ListEkmConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ekmConnections", elemType: EkmConnection })
  ekmConnections?: EkmConnection[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
