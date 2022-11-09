import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaControl } from "./googlecloudretailv2betacontrol";


// GoogleCloudRetailV2betaListControlsResponse
/** 
 * Response for ListControls method.
**/
export class GoogleCloudRetailV2betaListControlsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=controls", elemType: shared.GoogleCloudRetailV2betaControl })
  controls?: GoogleCloudRetailV2betaControl[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
