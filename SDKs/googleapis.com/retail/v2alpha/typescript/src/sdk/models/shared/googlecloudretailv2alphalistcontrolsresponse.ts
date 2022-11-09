import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaControl } from "./googlecloudretailv2alphacontrol";


// GoogleCloudRetailV2alphaListControlsResponse
/** 
 * Response for ListControls method.
**/
export class GoogleCloudRetailV2alphaListControlsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=controls", elemType: shared.GoogleCloudRetailV2alphaControl })
  controls?: GoogleCloudRetailV2alphaControl[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
