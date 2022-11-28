import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TensorFlowVersion } from "./tensorflowversion";



// ListTensorFlowVersionsResponse
/** 
 * Response for ListTensorFlowVersions.
**/
export class ListTensorFlowVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tensorflowVersions", elemType: TensorFlowVersion })
  tensorflowVersions?: TensorFlowVersion[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
