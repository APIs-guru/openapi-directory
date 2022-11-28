import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceGetMetadataRequest } from "./sourcegetmetadatarequest";
import { SourceSplitRequest } from "./sourcesplitrequest";



// SourceOperationRequest
/** 
 * A work item that represents the different operations that can be performed on a user-defined Source specification.
**/
export class SourceOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=getMetadata" })
  getMetadata?: SourceGetMetadataRequest;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalName" })
  originalName?: string;

  @SpeakeasyMetadata({ data: "json, name=split" })
  split?: SourceSplitRequest;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=systemName" })
  systemName?: string;
}
