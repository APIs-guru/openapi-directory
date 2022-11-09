import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VmwareVmsDetails } from "./vmwarevmsdetails";


// FetchInventoryResponse
/** 
 * Response message for fetchInventory.
**/
export class FetchInventoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=vmwareVms" })
  vmwareVms?: VmwareVmsDetails;
}
