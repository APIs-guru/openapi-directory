import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeGroup } from "./creativegroup";



// CreativeGroupsListResponse
/** 
 * Creative Group List Response
**/
export class CreativeGroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeGroups", elemType: CreativeGroup })
  creativeGroups?: CreativeGroup[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
