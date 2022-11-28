import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Lake } from "./googleclouddataplexv1lake";



// GoogleCloudDataplexV1ListLakesResponse
/** 
 * List lakes response.
**/
export class GoogleCloudDataplexV1ListLakesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lakes", elemType: GoogleCloudDataplexV1Lake })
  lakes?: GoogleCloudDataplexV1Lake[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
