import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1Model } from "./googlecloudmlv1model";


// GoogleCloudMlV1ListModelsResponse
/** 
 * Response message for the ListModels method.
**/
export class GoogleCloudMlV1ListModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=models", elemType: shared.GoogleCloudMlV1Model })
  models?: GoogleCloudMlV1Model[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
