import { SpeakeasyBase } from "../../../internal/utils";
import { TransferJob } from "./transferjob";
/**
 * Response from ListTransferJobs.
**/
export declare class ListTransferJobsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    transferJobs?: TransferJob[];
}
