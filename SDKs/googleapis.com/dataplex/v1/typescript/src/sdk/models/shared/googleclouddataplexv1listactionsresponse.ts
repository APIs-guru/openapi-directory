import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Action } from "./googleclouddataplexv1action";



// GoogleCloudDataplexV1ListActionsResponse
/** 
 * List actions response.
**/
export class GoogleCloudDataplexV1ListActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: GoogleCloudDataplexV1Action })
  actions?: GoogleCloudDataplexV1Action[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
