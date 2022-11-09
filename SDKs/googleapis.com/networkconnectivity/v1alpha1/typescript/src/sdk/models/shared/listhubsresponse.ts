import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hub } from "./hub";


// ListHubsResponse
/** 
 * Response for HubService.ListHubs method.
**/
export class ListHubsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hubs", elemType: shared.Hub })
  hubs?: Hub[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
