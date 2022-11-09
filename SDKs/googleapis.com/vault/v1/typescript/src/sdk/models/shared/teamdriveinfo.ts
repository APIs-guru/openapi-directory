import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamDriveInfo
/** 
 * Team Drives to search
**/
export class TeamDriveInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=teamDriveIds" })
  teamDriveIds?: string[];
}
