import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";



// ListModelsResponse
/** 
 * The response for list models
**/
export class ListModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=models", elemType: Model })
  models?: Model[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
