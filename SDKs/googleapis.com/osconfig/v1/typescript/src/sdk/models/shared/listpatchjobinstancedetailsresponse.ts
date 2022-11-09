import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchJobInstanceDetails } from "./patchjobinstancedetails";


// ListPatchJobInstanceDetailsResponse
/** 
 * A response message for listing the instances details for a patch job.
**/
export class ListPatchJobInstanceDetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=patchJobInstanceDetails", elemType: shared.PatchJobInstanceDetails })
  patchJobInstanceDetails?: PatchJobInstanceDetails[];
}
