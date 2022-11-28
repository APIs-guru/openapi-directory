import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Trial } from "./googlecloudmlv1trial";



// GoogleCloudMlV1ListTrialsResponse
/** 
 * The response message for the ListTrials method.
**/
export class GoogleCloudMlV1ListTrialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trials", elemType: GoogleCloudMlV1Trial })
  trials?: GoogleCloudMlV1Trial[];
}
