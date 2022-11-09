import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TunnelDestGroup } from "./tunneldestgroup";


// ListTunnelDestGroupsResponse
/** 
 * The response from ListTunnelDestGroups.
**/
export class ListTunnelDestGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tunnelDestGroups", elemType: shared.TunnelDestGroup })
  tunnelDestGroups?: TunnelDestGroup[];
}
