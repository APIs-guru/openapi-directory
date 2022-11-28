import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeamDriveInfo
/** 
 * Team Drives to search
**/
export class TeamDriveInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teamDriveIds" })
  teamDriveIds?: string[];
}
