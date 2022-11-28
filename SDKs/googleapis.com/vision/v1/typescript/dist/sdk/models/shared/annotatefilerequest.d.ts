import { SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
import { ImageContext } from "./imagecontext";
import { InputConfig } from "./inputconfig";
/**
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
**/
export declare class AnnotateFileRequest extends SpeakeasyBase {
    features?: Feature[];
    imageContext?: ImageContext;
    inputConfig?: InputConfig;
    pages?: number[];
}
