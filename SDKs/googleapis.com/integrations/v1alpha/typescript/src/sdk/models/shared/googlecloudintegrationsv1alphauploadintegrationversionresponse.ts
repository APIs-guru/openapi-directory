import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationVersion } from "./googlecloudintegrationsv1alphaintegrationversion";



// GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse
/** 
 * Response for UploadIntegrationVersion.
**/
export class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationVersion" })
  integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersion;
}
