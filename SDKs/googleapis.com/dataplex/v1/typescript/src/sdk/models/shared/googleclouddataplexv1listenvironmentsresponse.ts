import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Environment } from "./googleclouddataplexv1environment";



// GoogleCloudDataplexV1ListEnvironmentsResponse
/** 
 * List environments response.
**/
export class GoogleCloudDataplexV1ListEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: GoogleCloudDataplexV1Environment })
  environments?: GoogleCloudDataplexV1Environment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
