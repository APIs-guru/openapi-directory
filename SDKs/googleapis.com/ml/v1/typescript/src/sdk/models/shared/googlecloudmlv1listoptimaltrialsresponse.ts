import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1Trial } from "./googlecloudmlv1trial";


// GoogleCloudMlV1ListOptimalTrialsResponse
/** 
 * The response message for the ListOptimalTrials method.
**/
export class GoogleCloudMlV1ListOptimalTrialsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=trials", elemType: shared.GoogleCloudMlV1Trial })
  trials?: GoogleCloudMlV1Trial[];
}
