import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Zone } from "./googleclouddataplexv1zone";


// GoogleCloudDataplexV1ListZonesResponse
/** 
 * List zones response.
**/
export class GoogleCloudDataplexV1ListZonesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=zones", elemType: shared.GoogleCloudDataplexV1Zone })
  zones?: GoogleCloudDataplexV1Zone[];
}
