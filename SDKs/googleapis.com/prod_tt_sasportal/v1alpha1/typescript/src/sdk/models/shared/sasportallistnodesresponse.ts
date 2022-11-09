import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SasPortalNode } from "./sasportalnode";


// SasPortalListNodesResponse
/** 
 * Response for ListNodes.
**/
export class SasPortalListNodesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=nodes", elemType: shared.SasPortalNode })
  nodes?: SasPortalNode[];
}
