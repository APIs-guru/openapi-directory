import { SpeakeasyBase } from "../../../internal/utils";
import { VmwareVmsDetails } from "./vmwarevmsdetails";
/**
 * Response message for fetchInventory.
**/
export declare class FetchInventoryResponse extends SpeakeasyBase {
    nextPageToken?: string;
    updateTime?: string;
    vmwareVms?: VmwareVmsDetails;
}
