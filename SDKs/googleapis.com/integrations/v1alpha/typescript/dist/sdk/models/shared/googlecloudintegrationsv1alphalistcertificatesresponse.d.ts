import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCertificate } from "./googlecloudintegrationsv1alphacertificate";
/**
 * Response to list Certificates.
**/
export declare class GoogleCloudIntegrationsV1alphaListCertificatesResponse extends SpeakeasyBase {
    certificates?: GoogleCloudIntegrationsV1alphaCertificate[];
    nextPageToken?: string;
}
