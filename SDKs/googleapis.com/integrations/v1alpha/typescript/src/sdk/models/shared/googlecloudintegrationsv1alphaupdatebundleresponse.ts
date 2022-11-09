import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationBundleConfig } from "./googlecloudintegrationsv1alphaintegrationbundleconfig";


// GoogleCloudIntegrationsV1alphaUpdateBundleResponse
/** 
 * Response message for Bundle update
**/
export class GoogleCloudIntegrationsV1alphaUpdateBundleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudIntegrationsV1alphaIntegrationBundleConfig;
}
