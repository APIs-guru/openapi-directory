import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegration } from "./googlecloudintegrationsv1alphaintegration";
/**
 * Response for ListIntegrations.
**/
export declare class GoogleCloudIntegrationsV1alphaListIntegrationsResponse extends SpeakeasyBase {
    integrations?: GoogleCloudIntegrationsV1alphaIntegration[];
    nextPageToken?: string;
}
