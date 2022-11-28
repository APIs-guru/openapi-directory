import { SpeakeasyBase } from "../../../internal/utils";
import { SourceGetMetadataRequest } from "./sourcegetmetadatarequest";
import { SourceSplitRequest } from "./sourcesplitrequest";
/**
 * A work item that represents the different operations that can be performed on a user-defined Source specification.
**/
export declare class SourceOperationRequest extends SpeakeasyBase {
    getMetadata?: SourceGetMetadataRequest;
    name?: string;
    originalName?: string;
    split?: SourceSplitRequest;
    stageName?: string;
    systemName?: string;
}
