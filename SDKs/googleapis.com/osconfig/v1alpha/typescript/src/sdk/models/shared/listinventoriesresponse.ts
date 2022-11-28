import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Inventory } from "./inventory";



// ListInventoriesResponse
/** 
 * A response message for listing inventory data for all VMs in a specified location.
**/
export class ListInventoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventories", elemType: Inventory })
  inventories?: Inventory[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
