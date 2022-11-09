import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DriveActivity } from "./driveactivity";


// QueryDriveActivityResponse
/** 
 * Response message for querying Drive activity.
**/
export class QueryDriveActivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities", elemType: shared.DriveActivity })
  activities?: DriveActivity[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
