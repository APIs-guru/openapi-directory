import { SpeakeasyBase } from "../../../internal/utils";
import { AwsVmsDetails } from "./awsvmsdetails";
import { VmwareVmsDetails } from "./vmwarevmsdetails";
/**
 * Response message for fetchInventory.
**/
export declare class FetchInventoryResponse extends SpeakeasyBase {
    awsVms?: AwsVmsDetails;
    nextPageToken?: string;
    updateTime?: string;
    vmwareVms?: VmwareVmsDetails;
}
