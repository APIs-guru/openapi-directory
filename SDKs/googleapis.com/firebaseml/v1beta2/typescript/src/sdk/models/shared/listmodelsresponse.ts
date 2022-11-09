import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Model } from "./model";


// ListModelsResponse
/** 
 * The response for list models
**/
export class ListModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=models", elemType: shared.Model })
  models?: Model[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
