import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1Trial } from "./googlecloudmlv1trial";


// GoogleCloudMlV1ListTrialsResponse
/** 
 * The response message for the ListTrials method.
**/
export class GoogleCloudMlV1ListTrialsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=trials", elemType: shared.GoogleCloudMlV1Trial })
  trials?: GoogleCloudMlV1Trial[];
}
