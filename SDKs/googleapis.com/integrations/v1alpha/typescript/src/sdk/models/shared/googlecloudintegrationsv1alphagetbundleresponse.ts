import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationBundleConfig } from "./googlecloudintegrationsv1alphaintegrationbundleconfig";



// GoogleCloudIntegrationsV1alphaGetBundleResponse
/** 
 * Response for GetBundle.
**/
export class GoogleCloudIntegrationsV1alphaGetBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudIntegrationsV1alphaIntegrationBundleConfig;
}
