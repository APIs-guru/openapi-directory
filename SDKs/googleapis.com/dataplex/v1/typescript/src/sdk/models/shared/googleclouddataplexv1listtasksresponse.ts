import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Task } from "./googleclouddataplexv1task";


// GoogleCloudDataplexV1ListTasksResponse
/** 
 * List tasks response.
**/
export class GoogleCloudDataplexV1ListTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.GoogleCloudDataplexV1Task })
  tasks?: GoogleCloudDataplexV1Task[];

  @Metadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
