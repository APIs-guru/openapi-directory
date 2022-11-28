import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Zone } from "./googleclouddataplexv1zone";



// GoogleCloudDataplexV1ListZonesResponse
/** 
 * List zones response.
**/
export class GoogleCloudDataplexV1ListZonesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=zones", elemType: GoogleCloudDataplexV1Zone })
  zones?: GoogleCloudDataplexV1Zone[];
}
