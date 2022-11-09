import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EkmConnection } from "./ekmconnection";


// ListEkmConnectionsResponse
/** 
 * Response message for EkmService.ListEkmConnections.
**/
export class ListEkmConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ekmConnections", elemType: shared.EkmConnection })
  ekmConnections?: EkmConnection[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
