import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransferJob } from "./transferjob";



// ListTransferJobsResponse
/** 
 * Response from ListTransferJobs.
**/
export class ListTransferJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transferJobs", elemType: TransferJob })
  transferJobs?: TransferJob[];
}
