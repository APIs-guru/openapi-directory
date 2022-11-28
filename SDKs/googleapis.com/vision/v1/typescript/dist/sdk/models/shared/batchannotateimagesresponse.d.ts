import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotateImageResponse } from "./annotateimageresponse";
/**
 * Response to a batch image annotation request.
**/
export declare class BatchAnnotateImagesResponse extends SpeakeasyBase {
    responses?: AnnotateImageResponse[];
}
