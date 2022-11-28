import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Control } from "./googlecloudretailv2control";



// GoogleCloudRetailV2ListControlsResponse
/** 
 * Response for ListControls method.
**/
export class GoogleCloudRetailV2ListControlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controls", elemType: GoogleCloudRetailV2Control })
  controls?: GoogleCloudRetailV2Control[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
