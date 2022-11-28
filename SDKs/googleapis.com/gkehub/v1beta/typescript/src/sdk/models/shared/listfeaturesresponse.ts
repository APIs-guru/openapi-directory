import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";



// ListFeaturesResponse
/** 
 * Response message for the `GkeHub.ListFeatures` method.
**/
export class ListFeaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: Feature })
  resources?: Feature[];
}
