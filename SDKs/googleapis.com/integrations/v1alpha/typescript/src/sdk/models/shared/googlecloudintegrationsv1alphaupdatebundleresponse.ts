import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationBundleConfig } from "./googlecloudintegrationsv1alphaintegrationbundleconfig";



// GoogleCloudIntegrationsV1alphaUpdateBundleResponse
/** 
 * Response message for Bundle update
**/
export class GoogleCloudIntegrationsV1alphaUpdateBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudIntegrationsV1alphaIntegrationBundleConfig;
}
