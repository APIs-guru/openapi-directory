import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Entity } from "./googleclouddataplexv1entity";



// GoogleCloudDataplexV1ListEntitiesResponse
/** 
 * List metadata entities response.
**/
export class GoogleCloudDataplexV1ListEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDataplexV1Entity })
  entities?: GoogleCloudDataplexV1Entity[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
