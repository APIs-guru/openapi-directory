import { SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
import { ImageContext } from "./imagecontext";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";
/**
 * An offline file annotation request.
**/
export declare class AsyncAnnotateFileRequest extends SpeakeasyBase {
    features?: Feature[];
    imageContext?: ImageContext;
    inputConfig?: InputConfig;
    outputConfig?: OutputConfig;
}
