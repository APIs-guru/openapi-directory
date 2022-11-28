import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotateImageRequest } from "./annotateimagerequest";
/**
 * Multiple image annotation requests are batched into a single service call.
**/
export declare class BatchAnnotateImagesRequest extends SpeakeasyBase {
    parent?: string;
    requests?: AnnotateImageRequest[];
}
