import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Node } from "./node";


// ListNodesResponse
/** 
 * Response for ListNodes.
**/
export class ListNodesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=nodes", elemType: shared.Node })
  nodes?: Node[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
