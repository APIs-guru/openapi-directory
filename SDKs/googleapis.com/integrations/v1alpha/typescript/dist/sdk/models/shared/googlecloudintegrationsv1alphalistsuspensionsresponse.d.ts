import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSuspension } from "./googlecloudintegrationsv1alphasuspension";
/**
 * Response for Suspensions.ListSuspensions.
**/
export declare class GoogleCloudIntegrationsV1alphaListSuspensionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    suspensions?: GoogleCloudIntegrationsV1alphaSuspension[];
}
