import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalNode } from "./sasportalnode";



// SasPortalListNodesResponse
/** 
 * Response for ListNodes.
**/
export class SasPortalListNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: SasPortalNode })
  nodes?: SasPortalNode[];
}
