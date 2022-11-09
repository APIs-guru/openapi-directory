import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaAuthConfig } from "./googlecloudintegrationsv1alphaauthconfig";


// GoogleCloudIntegrationsV1alphaListAuthConfigsResponse
/** 
 * Response to list AuthConfigs.
**/
export class GoogleCloudIntegrationsV1alphaListAuthConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authConfigs", elemType: shared.GoogleCloudIntegrationsV1alphaAuthConfig })
  authConfigs?: GoogleCloudIntegrationsV1alphaAuthConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
