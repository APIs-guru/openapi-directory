import { SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";
import { AnnotateImageRequest } from "./annotateimagerequest";
/**
 * Request for async image annotation for a list of images.
**/
export declare class AsyncBatchAnnotateImagesRequest extends SpeakeasyBase {
    outputConfig?: OutputConfig;
    parent?: string;
    requests?: AnnotateImageRequest[];
}
