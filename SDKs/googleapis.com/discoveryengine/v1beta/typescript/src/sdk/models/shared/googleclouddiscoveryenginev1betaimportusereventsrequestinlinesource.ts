import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaUserEvent } from "./googleclouddiscoveryenginev1betauserevent";



// GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEvents", elemType: GoogleCloudDiscoveryengineV1betaUserEvent })
  userEvents?: GoogleCloudDiscoveryengineV1betaUserEvent[];
}
