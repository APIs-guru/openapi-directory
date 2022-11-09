import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceGetMetadataRequest } from "./sourcegetmetadatarequest";
import { SourceSplitRequest } from "./sourcesplitrequest";


// SourceOperationRequest
/** 
 * A work item that represents the different operations that can be performed on a user-defined Source specification.
**/
export class SourceOperationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=getMetadata" })
  getMetadata?: SourceGetMetadataRequest;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originalName" })
  originalName?: string;

  @Metadata({ data: "json, name=split" })
  split?: SourceSplitRequest;

  @Metadata({ data: "json, name=stageName" })
  stageName?: string;

  @Metadata({ data: "json, name=systemName" })
  systemName?: string;
}
