import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion } from "./googlecloudintegrationsv1alphaintegrationtemplateversion";



// GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse
/** 
 * Response for IntegrationTemplateVersions.ListIntegrationTemplateVersions.
**/
export class GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationTemplateVersions", elemType: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion })
  integrationTemplateVersions?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
