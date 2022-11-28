import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Session } from "./googleclouddataplexv1session";



// GoogleCloudDataplexV1ListSessionsResponse
/** 
 * List sessions response.
**/
export class GoogleCloudDataplexV1ListSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: GoogleCloudDataplexV1Session })
  sessions?: GoogleCloudDataplexV1Session[];
}
