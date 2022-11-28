import { SpeakeasyBase } from "../../../internal/utils";
import { InventorySource } from "./inventorysource";
export declare class ListInventorySourcesResponse extends SpeakeasyBase {
    inventorySources?: InventorySource[];
    nextPageToken?: string;
}
