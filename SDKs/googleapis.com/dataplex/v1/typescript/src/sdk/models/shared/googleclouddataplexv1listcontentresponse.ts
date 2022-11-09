import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Content } from "./googleclouddataplexv1content";


// GoogleCloudDataplexV1ListContentResponse
/** 
 * List content response.
**/
export class GoogleCloudDataplexV1ListContentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.GoogleCloudDataplexV1Content })
  content?: GoogleCloudDataplexV1Content[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
