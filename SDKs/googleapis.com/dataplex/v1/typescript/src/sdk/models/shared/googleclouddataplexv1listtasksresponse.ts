import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Task } from "./googleclouddataplexv1task";



// GoogleCloudDataplexV1ListTasksResponse
/** 
 * List tasks response.
**/
export class GoogleCloudDataplexV1ListTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: GoogleCloudDataplexV1Task })
  tasks?: GoogleCloudDataplexV1Task[];

  @SpeakeasyMetadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
