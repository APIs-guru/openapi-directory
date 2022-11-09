import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Asset } from "./googleclouddataplexv1asset";


// GoogleCloudDataplexV1ListAssetsResponse
/** 
 * List assets response.
**/
export class GoogleCloudDataplexV1ListAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: shared.GoogleCloudDataplexV1Asset })
  assets?: GoogleCloudDataplexV1Asset[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
