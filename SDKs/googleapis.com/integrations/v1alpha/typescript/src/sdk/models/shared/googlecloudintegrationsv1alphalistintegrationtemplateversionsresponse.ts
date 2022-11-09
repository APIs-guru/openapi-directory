import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion } from "./googlecloudintegrationsv1alphaintegrationtemplateversion";


// GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse
/** 
 * Response for IntegrationTemplateVersions.ListIntegrationTemplateVersions.
**/
export class GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=integrationTemplateVersions", elemType: shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion })
  integrationTemplateVersions?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
