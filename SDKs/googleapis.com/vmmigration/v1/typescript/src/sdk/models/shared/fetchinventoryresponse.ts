import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VmwareVmsDetails } from "./vmwarevmsdetails";



// FetchInventoryResponse
/** 
 * Response message for fetchInventory.
**/
export class FetchInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vmwareVms" })
  vmwareVms?: VmwareVmsDetails;
}
