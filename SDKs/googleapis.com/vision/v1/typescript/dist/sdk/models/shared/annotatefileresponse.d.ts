import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { InputConfig } from "./inputconfig";
import { AnnotateImageResponse } from "./annotateimageresponse";
/**
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
**/
export declare class AnnotateFileResponse extends SpeakeasyBase {
    error?: Status;
    inputConfig?: InputConfig;
    responses?: AnnotateImageResponse[];
    totalPages?: number;
}
