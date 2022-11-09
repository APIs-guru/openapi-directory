import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransferJob } from "./transferjob";


// ListTransferJobsResponse
/** 
 * Response from ListTransferJobs.
**/
export class ListTransferJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=transferJobs", elemType: shared.TransferJob })
  transferJobs?: TransferJob[];
}
