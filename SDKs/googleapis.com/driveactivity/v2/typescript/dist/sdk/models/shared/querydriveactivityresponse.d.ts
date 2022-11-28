import { SpeakeasyBase } from "../../../internal/utils";
import { DriveActivity } from "./driveactivity";
/**
 * Response message for querying Drive activity.
**/
export declare class QueryDriveActivityResponse extends SpeakeasyBase {
    activities?: DriveActivity[];
    nextPageToken?: string;
}
