import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Feature } from "./feature";


// ListFeaturesResponse
/** 
 * Response message for the `GkeHub.ListFeatures` method.
**/
export class ListFeaturesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.Feature })
  resources?: Feature[];
}
