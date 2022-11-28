import { SpeakeasyBase } from "../../../internal/utils";
import { SourceGetMetadataResponse } from "./sourcegetmetadataresponse";
import { SourceSplitResponse } from "./sourcesplitresponse";
/**
 * The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.
**/
export declare class SourceOperationResponse extends SpeakeasyBase {
    getMetadata?: SourceGetMetadataResponse;
    split?: SourceSplitResponse;
}
