import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaModel } from "./googlecloudretailv2betamodel";



// GoogleCloudRetailV2betaListModelsResponse
/** 
 * Response to a ListModelRequest.
**/
export class GoogleCloudRetailV2betaListModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=models", elemType: GoogleCloudRetailV2betaModel })
  models?: GoogleCloudRetailV2betaModel[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
