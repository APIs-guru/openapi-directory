import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2UserEvent } from "./googlecloudretailv2userevent";


// GoogleCloudRetailV2UserEventInlineSource
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudRetailV2UserEventInlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=userEvents", elemType: shared.GoogleCloudRetailV2UserEvent })
  userEvents?: GoogleCloudRetailV2UserEvent[];
}
