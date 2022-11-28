import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationVersion } from "./googlecloudintegrationsv1alphaintegrationversion";



// GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse
/** 
 * Response for TakeoverEditLock.
**/
export class GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationVersion" })
  integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersion;
}
