import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2Task } from "./googlecloudrunv2task";


// GoogleCloudRunV2ListTasksResponse
/** 
 * Response message containing a list of Tasks.
**/
export class GoogleCloudRunV2ListTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.GoogleCloudRunV2Task })
  tasks?: GoogleCloudRunV2Task[];
}
