import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Asset } from "./googleclouddataplexv1asset";



// GoogleCloudDataplexV1ListAssetsResponse
/** 
 * List assets response.
**/
export class GoogleCloudDataplexV1ListAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: GoogleCloudDataplexV1Asset })
  assets?: GoogleCloudDataplexV1Asset[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
