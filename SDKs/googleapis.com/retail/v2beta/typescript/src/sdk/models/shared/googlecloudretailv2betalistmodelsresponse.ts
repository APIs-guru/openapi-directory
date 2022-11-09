import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaModel } from "./googlecloudretailv2betamodel";


// GoogleCloudRetailV2betaListModelsResponse
/** 
 * Response to a ListModelRequest.
**/
export class GoogleCloudRetailV2betaListModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=models", elemType: shared.GoogleCloudRetailV2betaModel })
  models?: GoogleCloudRetailV2betaModel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
