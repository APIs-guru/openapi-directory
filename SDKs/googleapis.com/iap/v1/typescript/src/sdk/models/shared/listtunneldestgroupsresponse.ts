import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TunnelDestGroup } from "./tunneldestgroup";



// ListTunnelDestGroupsResponse
/** 
 * The response from ListTunnelDestGroups.
**/
export class ListTunnelDestGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tunnelDestGroups", elemType: TunnelDestGroup })
  tunnelDestGroups?: TunnelDestGroup[];
}
