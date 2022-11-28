import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaControl } from "./googlecloudretailv2betacontrol";



// GoogleCloudRetailV2betaListControlsResponse
/** 
 * Response for ListControls method.
**/
export class GoogleCloudRetailV2betaListControlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controls", elemType: GoogleCloudRetailV2betaControl })
  controls?: GoogleCloudRetailV2betaControl[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
