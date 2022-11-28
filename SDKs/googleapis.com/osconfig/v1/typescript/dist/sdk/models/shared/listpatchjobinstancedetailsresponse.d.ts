import { SpeakeasyBase } from "../../../internal/utils";
import { PatchJobInstanceDetails } from "./patchjobinstancedetails";
/**
 * A response message for listing the instances details for a patch job.
**/
export declare class ListPatchJobInstanceDetailsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    patchJobInstanceDetails?: PatchJobInstanceDetails[];
}
