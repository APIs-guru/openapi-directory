import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Model } from "./googlecloudmlv1model";



// GoogleCloudMlV1ListModelsResponse
/** 
 * Response message for the ListModels method.
**/
export class GoogleCloudMlV1ListModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=models", elemType: GoogleCloudMlV1Model })
  models?: GoogleCloudMlV1Model[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
