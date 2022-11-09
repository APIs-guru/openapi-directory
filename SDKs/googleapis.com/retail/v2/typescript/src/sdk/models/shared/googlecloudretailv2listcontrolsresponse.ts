import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2Control } from "./googlecloudretailv2control";


// GoogleCloudRetailV2ListControlsResponse
/** 
 * Response for ListControls method.
**/
export class GoogleCloudRetailV2ListControlsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=controls", elemType: shared.GoogleCloudRetailV2Control })
  controls?: GoogleCloudRetailV2Control[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
