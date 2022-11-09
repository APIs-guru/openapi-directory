import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationVersion } from "./googlecloudintegrationsv1alphaintegrationversion";


// GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse
/** 
 * Response for UploadIntegrationVersion.
**/
export class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=integrationVersion" })
  integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersion;
}
