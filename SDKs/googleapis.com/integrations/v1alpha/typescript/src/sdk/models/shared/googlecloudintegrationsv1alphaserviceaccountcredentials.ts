import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaServiceAccountCredentials
/** 
 * Represents the service account which can be used to generate access token for authenticating the service call.
**/
export class GoogleCloudIntegrationsV1alphaServiceAccountCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
