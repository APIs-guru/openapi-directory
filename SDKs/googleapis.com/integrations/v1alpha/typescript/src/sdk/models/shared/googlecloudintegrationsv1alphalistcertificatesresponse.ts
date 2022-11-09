import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaCertificate } from "./googlecloudintegrationsv1alphacertificate";


// GoogleCloudIntegrationsV1alphaListCertificatesResponse
/** 
 * Response to list Certificates.
**/
export class GoogleCloudIntegrationsV1alphaListCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: shared.GoogleCloudIntegrationsV1alphaCertificate })
  certificates?: GoogleCloudIntegrationsV1alphaCertificate[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
