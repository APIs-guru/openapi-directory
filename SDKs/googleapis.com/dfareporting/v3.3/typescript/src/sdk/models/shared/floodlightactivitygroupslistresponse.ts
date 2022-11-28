import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FloodlightActivityGroup } from "./floodlightactivitygroup";



// FloodlightActivityGroupsListResponse
/** 
 * Floodlight Activity Group List Response
**/
export class FloodlightActivityGroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodlightActivityGroups", elemType: FloodlightActivityGroup })
  floodlightActivityGroups?: FloodlightActivityGroup[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
