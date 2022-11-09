import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaUserEvent } from "./googlecloudretailv2alphauserevent";


// GoogleCloudRetailV2alphaUserEventInlineSource
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudRetailV2alphaUserEventInlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=userEvents", elemType: shared.GoogleCloudRetailV2alphaUserEvent })
  userEvents?: GoogleCloudRetailV2alphaUserEvent[];
}
