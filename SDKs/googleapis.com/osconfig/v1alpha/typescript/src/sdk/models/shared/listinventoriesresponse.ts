import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Inventory } from "./inventory";


// ListInventoriesResponse
/** 
 * A response message for listing inventory data for all VMs in a specified location.
**/
export class ListInventoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventories", elemType: shared.Inventory })
  inventories?: Inventory[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
