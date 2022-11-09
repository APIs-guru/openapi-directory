import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FloodlightActivityGroup } from "./floodlightactivitygroup";


// FloodlightActivityGroupsListResponse
/** 
 * Floodlight Activity Group List Response
**/
export class FloodlightActivityGroupsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodlightActivityGroups", elemType: shared.FloodlightActivityGroup })
  floodlightActivityGroups?: FloodlightActivityGroup[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
