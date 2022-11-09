import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TeamDrive } from "./teamdrive";


// TeamDriveList
/** 
 * A list of Team Drives.
**/
export class TeamDriveList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.TeamDrive })
  items?: TeamDrive[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
