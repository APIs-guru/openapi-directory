import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaModel } from "./googlecloudretailv2alphamodel";


// GoogleCloudRetailV2alphaListModelsResponse
/** 
 * Response to a ListModelRequest.
**/
export class GoogleCloudRetailV2alphaListModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=models", elemType: shared.GoogleCloudRetailV2alphaModel })
  models?: GoogleCloudRetailV2alphaModel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
