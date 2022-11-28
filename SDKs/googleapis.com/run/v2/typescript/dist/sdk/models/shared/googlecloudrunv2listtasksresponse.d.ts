import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Task } from "./googlecloudrunv2task";
/**
 * Response message containing a list of Tasks.
**/
export declare class GoogleCloudRunV2ListTasksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tasks?: GoogleCloudRunV2Task[];
}
