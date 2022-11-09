import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Action } from "./googleclouddataplexv1action";


// GoogleCloudDataplexV1ListActionsResponse
/** 
 * List actions response.
**/
export class GoogleCloudDataplexV1ListActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.GoogleCloudDataplexV1Action })
  actions?: GoogleCloudDataplexV1Action[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
