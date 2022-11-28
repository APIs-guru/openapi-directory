import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCertificate } from "./googlecloudintegrationsv1alphacertificate";



// GoogleCloudIntegrationsV1alphaListCertificatesResponse
/** 
 * Response to list Certificates.
**/
export class GoogleCloudIntegrationsV1alphaListCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: GoogleCloudIntegrationsV1alphaCertificate })
  certificates?: GoogleCloudIntegrationsV1alphaCertificate[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
