import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatapipelinesV1Pipeline } from "./googleclouddatapipelinesv1pipeline";


// GoogleCloudDatapipelinesV1ListPipelinesResponse
/** 
 * Response message for ListPipelines.
**/
export class GoogleCloudDatapipelinesV1ListPipelinesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=pipelines", elemType: shared.GoogleCloudDatapipelinesV1Pipeline })
  pipelines?: GoogleCloudDatapipelinesV1Pipeline[];
}
