import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceGetMetadataResponse } from "./sourcegetmetadataresponse";
import { SourceSplitResponse } from "./sourcesplitresponse";



// SourceOperationResponse
/** 
 * The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.
**/
export class SourceOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=getMetadata" })
  getMetadata?: SourceGetMetadataResponse;

  @SpeakeasyMetadata({ data: "json, name=split" })
  split?: SourceSplitResponse;
}
