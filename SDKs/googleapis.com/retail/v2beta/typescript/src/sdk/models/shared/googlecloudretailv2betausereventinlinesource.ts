import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaUserEvent } from "./googlecloudretailv2betauserevent";


// GoogleCloudRetailV2betaUserEventInlineSource
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudRetailV2betaUserEventInlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=userEvents", elemType: shared.GoogleCloudRetailV2betaUserEvent })
  userEvents?: GoogleCloudRetailV2betaUserEvent[];
}
