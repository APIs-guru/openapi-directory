import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Hub } from "./hub";
/**
 * Response for HubService.ListHubs method.
**/
export declare class ListHubsResponse extends SpeakeasyBase {
    hubs?: Hub[];
    nextPageToken?: string;
    unreachable?: string[];
}
