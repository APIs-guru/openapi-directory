import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotateFileRequest } from "./annotatefilerequest";
/**
 * A list of requests to annotate files using the BatchAnnotateFiles API.
**/
export declare class BatchAnnotateFilesRequest extends SpeakeasyBase {
    parent?: string;
    requests?: AnnotateFileRequest[];
}
