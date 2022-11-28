import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Content } from "./googleclouddataplexv1content";



// GoogleCloudDataplexV1ListContentResponse
/** 
 * List content response.
**/
export class GoogleCloudDataplexV1ListContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: GoogleCloudDataplexV1Content })
  content?: GoogleCloudDataplexV1Content[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
