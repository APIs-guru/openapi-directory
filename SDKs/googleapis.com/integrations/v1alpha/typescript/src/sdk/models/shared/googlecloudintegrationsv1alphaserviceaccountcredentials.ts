import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaServiceAccountCredentials
/** 
 * Represents the service account which can be used to generate access token for authenticating the service call.
**/
export class GoogleCloudIntegrationsV1alphaServiceAccountCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
