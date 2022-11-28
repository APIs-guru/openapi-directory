import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAuthConfig } from "./googlecloudintegrationsv1alphaauthconfig";
/**
 * Response to list AuthConfigs.
**/
export declare class GoogleCloudIntegrationsV1alphaListAuthConfigsResponse extends SpeakeasyBase {
    authConfigs?: GoogleCloudIntegrationsV1alphaAuthConfig[];
    nextPageToken?: string;
}
