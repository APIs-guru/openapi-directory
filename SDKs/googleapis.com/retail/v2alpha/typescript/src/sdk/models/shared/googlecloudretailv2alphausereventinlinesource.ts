import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaUserEventInput } from "./googlecloudretailv2alphauserevent";



// GoogleCloudRetailV2alphaUserEventInlineSourceInput
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudRetailV2alphaUserEventInlineSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEvents", elemType: GoogleCloudRetailV2alphaUserEventInput })
  userEvents?: GoogleCloudRetailV2alphaUserEventInput[];
}
