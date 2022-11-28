import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedInventorySource } from "./assignedinventorysource";
/**
 * Response message for AssignedInventorySourceService.ListAssignedInventorySources.
**/
export declare class ListAssignedInventorySourcesResponse extends SpeakeasyBase {
    assignedInventorySources?: AssignedInventorySource[];
    nextPageToken?: string;
}
