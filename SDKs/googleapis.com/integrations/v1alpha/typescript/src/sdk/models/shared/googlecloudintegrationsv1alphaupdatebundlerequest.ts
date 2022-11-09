import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationBundleConfig } from "./googlecloudintegrationsv1alphaintegrationbundleconfig";


// GoogleCloudIntegrationsV1alphaUpdateBundleRequest
/** 
 * THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Request message for Bundle update
**/
export class GoogleCloudIntegrationsV1alphaUpdateBundleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudIntegrationsV1alphaIntegrationBundleConfig;
}
