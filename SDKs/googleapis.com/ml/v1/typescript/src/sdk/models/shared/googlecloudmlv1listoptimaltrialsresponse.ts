import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Trial } from "./googlecloudmlv1trial";



// GoogleCloudMlV1ListOptimalTrialsResponse
/** 
 * The response message for the ListOptimalTrials method.
**/
export class GoogleCloudMlV1ListOptimalTrialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trials", elemType: GoogleCloudMlV1Trial })
  trials?: GoogleCloudMlV1Trial[];
}
