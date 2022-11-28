import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";



// ListNodesResponse
/** 
 * Response for ListNodes.
**/
export class ListNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: Node })
  nodes?: Node[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
