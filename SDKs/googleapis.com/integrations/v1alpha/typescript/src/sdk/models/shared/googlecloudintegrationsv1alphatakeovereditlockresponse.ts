import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationVersion } from "./googlecloudintegrationsv1alphaintegrationversion";


// GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse
/** 
 * Response for TakeoverEditLock.
**/
export class GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=integrationVersion" })
  integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersion;
}
