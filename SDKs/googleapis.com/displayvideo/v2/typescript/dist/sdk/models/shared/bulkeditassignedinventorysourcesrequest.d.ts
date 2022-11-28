import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedInventorySourceInput } from "./assignedinventorysource";
/**
 * Request message for AssignedInventorySourceService.BulkEdit.
**/
export declare class BulkEditAssignedInventorySourcesRequestInput extends SpeakeasyBase {
    advertiserId?: string;
    createdAssignedInventorySources?: AssignedInventorySourceInput[];
    deletedAssignedInventorySources?: string[];
    partnerId?: string;
}
