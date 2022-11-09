import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Entity } from "./googleclouddataplexv1entity";


// GoogleCloudDataplexV1ListEntitiesResponse
/** 
 * List metadata entities response.
**/
export class GoogleCloudDataplexV1ListEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDataplexV1Entity })
  entities?: GoogleCloudDataplexV1Entity[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
