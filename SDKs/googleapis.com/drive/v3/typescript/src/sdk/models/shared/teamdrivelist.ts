import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TeamDrive } from "./teamdrive";



// TeamDriveList
/** 
 * A list of Team Drives.
**/
export class TeamDriveList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=teamDrives", elemType: TeamDrive })
  teamDrives?: TeamDrive[];
}
