import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hub } from "./hub";



// ListHubsResponse
/** 
 * Response for HubService.ListHubs method.
**/
export class ListHubsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hubs", elemType: Hub })
  hubs?: Hub[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
