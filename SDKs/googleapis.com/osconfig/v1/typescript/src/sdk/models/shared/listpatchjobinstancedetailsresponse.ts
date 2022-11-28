import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchJobInstanceDetails } from "./patchjobinstancedetails";



// ListPatchJobInstanceDetailsResponse
/** 
 * A response message for listing the instances details for a patch job.
**/
export class ListPatchJobInstanceDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=patchJobInstanceDetails", elemType: PatchJobInstanceDetails })
  patchJobInstanceDetails?: PatchJobInstanceDetails[];
}
