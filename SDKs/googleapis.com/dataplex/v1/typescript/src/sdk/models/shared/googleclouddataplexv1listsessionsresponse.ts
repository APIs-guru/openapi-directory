import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Session } from "./googleclouddataplexv1session";


// GoogleCloudDataplexV1ListSessionsResponse
/** 
 * List sessions response.
**/
export class GoogleCloudDataplexV1ListSessionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sessions", elemType: shared.GoogleCloudDataplexV1Session })
  sessions?: GoogleCloudDataplexV1Session[];
}
