import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaModel } from "./googlecloudretailv2alphamodel";



// GoogleCloudRetailV2alphaListModelsResponse
/** 
 * Response to a ListModelRequest.
**/
export class GoogleCloudRetailV2alphaListModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=models", elemType: GoogleCloudRetailV2alphaModel })
  models?: GoogleCloudRetailV2alphaModel[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
