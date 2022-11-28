import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectBillingInfo } from "./projectbillinginfo";
/**
 * Request message for `ListProjectBillingInfoResponse`.
**/
export declare class ListProjectBillingInfoResponse extends SpeakeasyBase {
    nextPageToken?: string;
    projectBillingInfo?: ProjectBillingInfo[];
}
