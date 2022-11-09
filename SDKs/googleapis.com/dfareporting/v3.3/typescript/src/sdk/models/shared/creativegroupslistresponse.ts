import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreativeGroup } from "./creativegroup";


// CreativeGroupsListResponse
/** 
 * Creative Group List Response
**/
export class CreativeGroupsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeGroups", elemType: shared.CreativeGroup })
  creativeGroups?: CreativeGroup[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
