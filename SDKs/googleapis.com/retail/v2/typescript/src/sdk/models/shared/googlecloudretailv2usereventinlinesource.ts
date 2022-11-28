import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2UserEventInput } from "./googlecloudretailv2userevent";



// GoogleCloudRetailV2UserEventInlineSourceInput
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudRetailV2UserEventInlineSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEvents", elemType: GoogleCloudRetailV2UserEventInput })
  userEvents?: GoogleCloudRetailV2UserEventInput[];
}
