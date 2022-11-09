import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationBundleConfig } from "./googlecloudintegrationsv1alphaintegrationbundleconfig";


// GoogleCloudIntegrationsV1alphaGetBundleResponse
/** 
 * Response for GetBundle.
**/
export class GoogleCloudIntegrationsV1alphaGetBundleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudIntegrationsV1alphaIntegrationBundleConfig;
}
