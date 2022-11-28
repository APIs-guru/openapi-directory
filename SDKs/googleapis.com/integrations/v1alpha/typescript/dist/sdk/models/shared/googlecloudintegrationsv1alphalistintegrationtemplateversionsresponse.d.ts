import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion } from "./googlecloudintegrationsv1alphaintegrationtemplateversion";
/**
 * Response for IntegrationTemplateVersions.ListIntegrationTemplateVersions.
**/
export declare class GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse extends SpeakeasyBase {
    integrationTemplateVersions?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion[];
    nextPageToken?: string;
}
