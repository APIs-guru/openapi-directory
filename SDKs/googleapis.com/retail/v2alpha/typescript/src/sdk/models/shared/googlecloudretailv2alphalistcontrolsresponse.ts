import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaControl } from "./googlecloudretailv2alphacontrol";



// GoogleCloudRetailV2alphaListControlsResponse
/** 
 * Response for ListControls method.
**/
export class GoogleCloudRetailV2alphaListControlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controls", elemType: GoogleCloudRetailV2alphaControl })
  controls?: GoogleCloudRetailV2alphaControl[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
