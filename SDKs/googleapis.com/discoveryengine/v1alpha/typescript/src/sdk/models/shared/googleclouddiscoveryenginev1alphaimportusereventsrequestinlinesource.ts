import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaUserEvent } from "./googleclouddiscoveryenginev1alphauserevent";



// GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEvents", elemType: GoogleCloudDiscoveryengineV1alphaUserEvent })
  userEvents?: GoogleCloudDiscoveryengineV1alphaUserEvent[];
}
