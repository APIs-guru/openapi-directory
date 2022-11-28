import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Task } from "./googlecloudrunv2task";



// GoogleCloudRunV2ListTasksResponse
/** 
 * Response message containing a list of Tasks.
**/
export class GoogleCloudRunV2ListTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: GoogleCloudRunV2Task })
  tasks?: GoogleCloudRunV2Task[];
}
