import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveActivity } from "./driveactivity";



// QueryDriveActivityResponse
/** 
 * Response message for querying Drive activity.
**/
export class QueryDriveActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: DriveActivity })
  activities?: DriveActivity[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
