import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TensorFlowVersion } from "./tensorflowversion";


// ListTensorFlowVersionsResponse
/** 
 * Response for ListTensorFlowVersions.
**/
export class ListTensorFlowVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tensorflowVersions", elemType: shared.TensorFlowVersion })
  tensorflowVersions?: TensorFlowVersion[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
