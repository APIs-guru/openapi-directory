import { SpeakeasyBase } from "../../../internal/utils";
import { Inventory } from "./inventory";
/**
 * A response message for listing inventory data for all VMs in a specified location.
**/
export declare class ListInventoriesResponse extends SpeakeasyBase {
    inventories?: Inventory[];
    nextPageToken?: string;
}
