import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Lake } from "./googleclouddataplexv1lake";


// GoogleCloudDataplexV1ListLakesResponse
/** 
 * List lakes response.
**/
export class GoogleCloudDataplexV1ListLakesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lakes", elemType: shared.GoogleCloudDataplexV1Lake })
  lakes?: GoogleCloudDataplexV1Lake[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
