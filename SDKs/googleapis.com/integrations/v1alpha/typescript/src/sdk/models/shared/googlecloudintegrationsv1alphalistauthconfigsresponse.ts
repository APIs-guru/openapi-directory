import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAuthConfig } from "./googlecloudintegrationsv1alphaauthconfig";



// GoogleCloudIntegrationsV1alphaListAuthConfigsResponse
/** 
 * Response to list AuthConfigs.
**/
export class GoogleCloudIntegrationsV1alphaListAuthConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authConfigs", elemType: GoogleCloudIntegrationsV1alphaAuthConfig })
  authConfigs?: GoogleCloudIntegrationsV1alphaAuthConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
