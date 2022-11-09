import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Environment } from "./googleclouddataplexv1environment";


// GoogleCloudDataplexV1ListEnvironmentsResponse
/** 
 * List environments response.
**/
export class GoogleCloudDataplexV1ListEnvironmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.GoogleCloudDataplexV1Environment })
  environments?: GoogleCloudDataplexV1Environment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
