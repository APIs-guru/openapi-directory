import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaUserEventInput } from "./googlecloudretailv2betauserevent";



// GoogleCloudRetailV2betaUserEventInlineSourceInput
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudRetailV2betaUserEventInlineSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEvents", elemType: GoogleCloudRetailV2betaUserEventInput })
  userEvents?: GoogleCloudRetailV2betaUserEventInput[];
}
