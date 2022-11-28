import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncAnnotateFileRequest } from "./asyncannotatefilerequest";
/**
 * Multiple async file annotation requests are batched into a single service call.
**/
export declare class AsyncBatchAnnotateFilesRequest extends SpeakeasyBase {
    parent?: string;
    requests?: AsyncAnnotateFileRequest[];
}
